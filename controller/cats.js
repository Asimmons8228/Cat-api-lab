const axios = require("axios");

const ROOT_URL = "https://catfact.ninja/fact";

const getCats = async (req, res) => {
  try {
    const catApi = await axios.get(`${ROOT_URL}`);
    const catData = catApi.data;
    console.log(catData);
    res.render("cat/fact", { catData: catData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCats };
