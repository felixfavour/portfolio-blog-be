import axios from 'axios'
import xml2js from 'xml2js'
import { errorMsg, successMsg } from '../helpers/functions.js';

export const getAllStories = async (req, res) => {
  try {
    const result = await axios.get('https://medium.com/feed/@felixfavour0')
    const xmlParser = xml2js.parseString
    xmlParser(result.data, (err, json) => {
      if (err) res.status(400).json(errorMsg(err))
      res.status(200).json(successMsg(json.rss.channel[0].item))
    })
  } catch (err) {
    console.error(`ERROR from ${req.url}: ${err}`)
    res.status(400).json(errorMsg(err))
  }
}
