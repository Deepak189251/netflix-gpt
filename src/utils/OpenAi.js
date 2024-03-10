import OpenAI from "openai";
import { OpenAi_Key } from "./Constants";

const openai = new OpenAI({
    apiKey: OpenAi_Key,
    dangerouslyAllowBrowser: true
})

export default openai