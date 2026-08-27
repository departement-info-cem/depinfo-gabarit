// Plugin Docusaurus : expose la configuration nécessaire aux composants <Quiz />
// (notamment les options PeerJS, pour un usage 100% peer-to-peer sans serveur à déployer)
// via les données globales du plugin.

/**
 * @param {Object} context - Contexte Docusaurus
 * @param {Object} [options]
 * @param {Object} [options.peerOptions] - Options PeerJS (voir https://peerjs.com/docs#peer-options).
 *   Par défaut, utilise le serveur de courtage public gratuit de PeerJS (aucun déploiement requis).
 */
module.exports = function pluginQuiz(context, options) {
  const peerOptions = options?.peerOptions || {};

  return {
    name: "docusaurus-plugin-quiz",
    async contentLoaded({ actions }) {
      actions.setGlobalData({ peerOptions });
    },
  };
};
