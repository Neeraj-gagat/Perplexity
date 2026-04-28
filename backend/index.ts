import express from "express";
import { tavily } from "@tavily/core"
import z, { url } from "zod"
import { Output, streamText } from 'ai'
import { PROMPT_TEMPLATE, SYSTEM_PROMPT } from "./prompt";

const client = tavily({apiKey: process.env.TAVILY_API_KEY}) 

const app = express()

app.use(express.json());

app.post("/signup", async (req, res) => {

})

app.post("/signin", async (req, res) => {

})

app.get("/conversations", async (req, res) => {

})

app.get("/conversation/:conversationId", async (req, res) => {

})

app.post("/chat", async (req, res) => {
    // query from the user
    const query = req.body.query;

    // make sure only user with paid plan are able to hit the writepoint 

    // checking indexed results for similar websearch query

    // web search for resources
    const webSearchResponse = await client.search(query, {
        searchDepth: "advanced"
    });

    const webSearchResult = webSearchResponse.results

    // do context enginnering on prompt + web search responses
    const prompt = PROMPT_TEMPLATE
        .replace("{{WEB_SEARCH_RESULTS}}", JSON.stringify(webSearchResult))
        .replace("{{USER_QUERY}}", JSON.stringify(query));

    // hit the LLM and stream back the response 
    const result = streamText({
    model: 'openai/gpt-5.4',
    prompt: prompt,
    system:SYSTEM_PROMPT,
    // output: Output.object({
    // schema: z.object({
    //   followUps: z.array(z.string()),
    //     answer: z.string
    //     }),
    // }),
    })

    // res.header('Cache-Control', 'no-cache')
    // res.header('Content-Type', 'text/event-stream')

    for await (const textPart of result.textStream) {
        res.write(textPart);
    }

    res.write("\n<SOURCES>\n")

    // also stream back the resources and the follow up questons (which we get from the parallel LLM call)
    res.write(JSON.stringify(webSearchResult.map(result => ({url: result.url}))));

    res.write("\n</SOURCES>\n")

    // close the event stream
    res.end()
})

app.post("/chat/follow_up", async (req, res) => {
    // get the existing chat form db,

    // forward the full history to LLM 

    // TODO do the context enginerring here
    
    // stream the response to the user
})

app.listen(3000);