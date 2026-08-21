import React, { useState } from 'react';

export default function GithubDownload({
  label,
  repo,
  folder,
  branch = "main"
}: {
  label: string
  repo: string;
  folder: string;
  branch?: string;
}) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    setProgress(0);

    const user = "departement-info-cem";  // 👈 ton utilisateur GitHub
    //const repo = "1P6";         // 👈 ton dépôt GitHub
    //const folder = "code/examens/formatif_2_1p6"; // chemin relatif dans le repo

    // Import dynamique pour éviter les erreurs côté serveur
    const JSZip = (await import('jszip')).default;
    const zip = new JSZip();

    const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${folder}?ref=${branch}`;

    // Récupération récursive des fichiers
    async function fetchFiles(url, basePath = "") {
      const res = await fetch(url);
      const items = await res.json();

      for (const item of items) {
        if (item.type === "file") {
          const fileRes = await fetch(item.download_url);
          const blob = await fileRes.arrayBuffer();
          zip.file(`${basePath}${item.name}`, blob);

          // Mise à jour de la progression
          downloadedFiles++;
          setProgress(Math.round((downloadedFiles / totalFiles) * 100));
        } else if (item.type === "dir") {
          await fetchFiles(item.url, `${basePath}${item.name}/`);
        }
      }
    }

    // Compte total des fichiers pour une progression réaliste
    async function countFiles(url) {
      const res = await fetch(url);
      const items = await res.json();
      let count = 0;
      for (const item of items) {
        if (item.type === "file") count++;
        else if (item.type === "dir") count += await countFiles(item.url);
      }
      return count;
    }

    let totalFiles = 0;
    let downloadedFiles = 0;

    try {
      totalFiles = await countFiles(apiUrl);
      await fetchFiles(apiUrl);

      const content = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = `${folder.split('/').pop()}.zip`;
      link.click();
    } catch (err) {
      alert("❌ Erreur : " + err.message);
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "1rem 0" }}>
      <button
        className="button button--primary"
        onClick={handleDownload}
        disabled={loading}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      >
        {loading ? "📦 Téléchargement en cours..." : label}
      </button>

      {loading && (
        <div style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#ddd",
          borderRadius: "5px",
          overflow: "hidden",
        }}>
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#0078e7",
              transition: "width 0.2s ease",
            }}
          ></div>
        </div>
      )}

      {loading && (
        <p style={{ fontSize: "0.9rem", textAlign: "center", marginTop: "0.5rem" }}>
          {progress < 100
            ? `Téléchargement des fichiers... ${progress}%`
            : "Compression du dossier..."}
        </p>
      )}
    </div>
  );
}
