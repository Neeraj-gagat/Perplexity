import express from "express";
const app = express()

app.get("/chat", async (req, res) => {
    // query from the user

    // make sure only user with paid plan are able to hit the endpoint 

    // indexing websearch for similar query

    // web search for resources

    // do context enginnering on prompt + web search responses

    // hit the LLM and stream back the response 

    // also stream back the resources and the follow up questons (which we get from the parallel LLM call)
})

app.listen(3000);