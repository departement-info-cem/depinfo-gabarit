import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import { Line } from "./line";

export default function GHCode({
  language,
  user = "departement-info-cem",
  repo,
  filePath,
  startLine = 0,
  endLine,
  showLineNumber = false,
  branch = "main",
  ignore,
}: {
  language?: string;
  user?: string;
  repo: string;
  filePath: string;
  showLineNumber?: boolean;
  startLine?: number;
  endLine?: number;
  branch?: string;
  ignore?: string;
}) {
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCode(user, repo, filePath, branch)
      .then((code) => {
        setCode(code);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;

  if (error)
    return <div>Une erreur est survenue. Appellez votre enseignant!</div>;

  if (language == null) {
    language = filePath.split(".").at(-1);
  }

  const stringLines: string[] = code.split("\n");
  let lines: Line[] = stringLines.map((line: string, index: number) => {
    return {
      lineNumber: index + 1,
      code: line,
    };
  });
  if (ignore != null) {
    lines = adjustForIgnoredLines(lines, ignore);
  }

  endLine = endLine ?? lines.at(-1).lineNumber;
  lines = lines.filter(
    (line: Line) => line.lineNumber >= startLine && line.lineNumber <= endLine
  );

  return (
    <CodeBlock showLineNumbers={showLineNumber} language={language}>
      {lines.map((line: Line) => line.code).join("\n")}
    </CodeBlock>
  );
}

async function getCode(
  user: string,
  repo: string,
  filePath: string,
  branch: string
): Promise<string> {
  var request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status >= 300) {
          reject("Error, status code = " + request.status);
        } else {
          resolve(request.responseText);
        }
      }
    };
    request.open(
      "GET",
      `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filePath}`
    );
    request.send();
  });
}

function adjustForIgnoredLines(lines: Line[], ignore: string): Line[] {
  let adjustedLines: Line[] = lines;
  const ignoreGroups: string[] = ignore.split(",");
  ignoreGroups.forEach((ignoreGroup: string) => {
    const ignoreRange: string[] = ignoreGroup.split("-");
    const startIgnore: string[] = ignoreRange[0].split(":");
    const startIgnoreLine: number = +startIgnore[0];
    const startIgnoreColumn: number =
      startIgnore.length == 1 ? 0 : +startIgnore[1];
    const endIgnore: string[] = ignoreRange[1].split(":");
    const endIgnoreLine: number = +endIgnore[0];
    const endIgnoreLineObj: Line = adjustedLines.find(
      (line: Line) => line.lineNumber == endIgnoreLine
    );
    const endIgnoreColumn: number =
      endIgnore.length == 1 ? endIgnoreLineObj.code.length : +endIgnore[1];
    const replacementString: string =
      ignoreRange.length <= 2 ? "" : ignoreRange[2];
    const indexOfFirstLine: number = adjustedLines.indexOf(
      adjustedLines.find((line: Line) => line.lineNumber == startIgnoreLine)
    );

    adjustedLines = removeUnwantedLines(
      adjustedLines,
      startIgnoreLine,
      endIgnoreLine,
      endIgnoreColumn,
      startIgnoreColumn,
      endIgnoreLineObj.code
    );

    adjustedLines = adjustForColumns(
      adjustedLines,
      startIgnoreLine,
      startIgnoreColumn,
      endIgnoreLine,
      endIgnoreColumn,
      replacementString
    );

    if (replacementString != "") {
      adjustedLines.splice(indexOfFirstLine, 0, {
        lineNumber: startIgnoreLine,
        code: replacementString,
      });
    }
  });
  return adjustedLines;
}

function removeUnwantedLines(
  lines: Line[],
  startIgnoreLine: number,
  endIgnoreLine: number,
  endIgnoreColumn: number,
  startIgnoreColumn: number,
  endIgnoreCode: string
): Line[] {
  return lines.filter((line: Line) => {
    let startLine: number = startIgnoreLine;
    let endLine: number = endIgnoreLine;
    if (startIgnoreColumn != 0) {
      startLine += 1;
    }
    if (endIgnoreColumn != endIgnoreCode.length) {
      endLine -= 1;
    }
    return line.lineNumber < startLine || line.lineNumber > endLine;
  });
}

function adjustForColumns(
  line: Line[],
  startIgnoreLine: number,
  startIgnoreColumn: number,
  endIgnoreLine: number,
  endIgnoreColumn: number,
  replacementString: string
): Line[] {
  return line.map((line: Line) => {
    if (line.lineNumber == startIgnoreLine) {
      if (line.lineNumber == endIgnoreLine) {
        line.code =
          line.code.substring(0, startIgnoreColumn) +
          replacementString +
          line.code.substring(endIgnoreColumn);
      } else {
        line.code =
          line.code.substring(0, startIgnoreColumn) + replacementString;
      }
    } else if (line.lineNumber == endIgnoreLine) {
      line.code = line.code.substring(endIgnoreColumn);
    }
    return line;
  });
}
