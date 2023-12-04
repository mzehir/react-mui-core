const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "options",
                baseUrl: "./",
                aliases: {
                    "@mui/styled-engine": "./node_modules/@mui/styled-engine-sc",
                },
            },
        },
    ],
};
