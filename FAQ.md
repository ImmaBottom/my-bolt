<<<<<<< HEAD
# Frequently Asked Questions (FAQ)

<details>
<summary><strong>What are the best models for bolt.diy?</strong></summary>
=======
[![bolt.diy: AI-Powered Full-Stack Web Development in the Browser](./public/social_preview_index.jpg)](https://bolt.diy)

# bolt.diy

## Recommended Models for bolt.diy
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e

For the best experience with bolt.diy, we recommend using the following models:

- **Claude 3.5 Sonnet (old)**: Best overall coder, providing excellent results across all use cases
- **Gemini 2.0 Flash**: Exceptional speed while maintaining good performance
- **GPT-4o**: Strong alternative to Claude 3.5 Sonnet with comparable capabilities
- **DeepSeekCoder V2 236b**: Best open source model (available through OpenRouter, DeepSeek API, or self-hosted)
- **Qwen 2.5 Coder 32b**: Best model for self-hosting with reasonable hardware requirements

**Note**: Models with less than 7b parameters typically lack the capability to properly interact with bolt!

<<<<<<< HEAD
</details>

<details>
<summary><strong>How do I get the best results with bolt.diy?</strong></summary>

- **Be specific about your stack**:  
  Mention the frameworks or libraries you want to use (e.g., Astro, Tailwind, ShadCN) in your initial prompt. This ensures that bolt.diy scaffolds the project according to your preferences.

- **Use the enhance prompt icon**:  
  Before sending your prompt, click the _enhance_ icon to let the AI refine your prompt. You can edit the suggested improvements before submitting.

- **Scaffold the basics first, then add features**:  
  Ensure the foundational structure of your application is in place before introducing advanced functionality. This helps bolt.diy establish a solid base to build on.

- **Batch simple instructions**:  
 Combine simple tasks into a single prompt to save time and reduce API credit consumption. For example:  
 _"Change the color scheme, add mobile responsiveness, and restart the dev server."_
</details>

<details>
<summary><strong>How do I contribute to bolt.diy?</strong></summary>

Check out our [Contribution Guide](CONTRIBUTING.md) for more details on how to get involved!

</details>

<details>
<summary><strong>What are the future plans for bolt.diy?</strong></summary>

Visit our [Roadmap](https://roadmap.sh/r/ottodev-roadmap-2ovzo) for the latest updates.  
New features and improvements are on the way!

</details>

<details>
<summary><strong>Why are there so many open issues/pull requests?</strong></summary>

bolt.diy began as a small showcase project on @ColeMedin's YouTube channel to explore editing open-source projects with local LLMs. However, it quickly grew into a massive community effort!

We're forming a team of maintainers to manage demand and streamline issue resolution. The maintainers are rockstars, and we're also exploring partnerships to help the project thrive.

</details>

<details>
<summary><strong>How do local LLMs compare to larger models like Claude 3.5 Sonnet for bolt.diy?</strong></summary>

While local LLMs are improving rapidly, larger models like GPT-4o, Claude 3.5 Sonnet, and DeepSeek Coder V2 236b still offer the best results for complex applications. Our ongoing focus is to improve prompts, agents, and the platform to better support smaller local LLMs.

</details>

<details>
<summary><strong>Common Errors and Troubleshooting</strong></summary>

### **"There was an error processing this request"**

This generic error message means something went wrong. Check both:

- The terminal (if you started the app with Docker or `pnpm`).
- The developer console in your browser (press `F12` or right-click > _Inspect_, then go to the _Console_ tab).

### **"x-api-key header missing"**

This error is sometimes resolved by restarting the Docker container.  
If that doesn't work, try switching from Docker to `pnpm` or vice versa. We're actively investigating this issue.

### **Blank preview when running the app**

A blank preview often occurs due to hallucinated bad code or incorrect commands.  
To troubleshoot:

- Check the developer console for errors.
- Remember, previews are core functionality, so the app isn't broken! We're working on making these errors more transparent.

### **"Everything works, but the results are bad"**

Local LLMs like Qwen-2.5-Coder are powerful for small applications but still experimental for larger projects. For better results, consider using larger models like GPT-4o, Claude 3.5 Sonnet, or DeepSeek Coder V2 236b.

### **"Received structured exception #0xc0000005: access violation"**

If you are getting this, you are probably on Windows. The fix is generally to update the [Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

### **"Miniflare or Wrangler errors in Windows"**

You will need to make sure you have the latest version of Visual Studio C++ installed (14.40.33816), more information here https://github.com/stackblitz-labs/bolt.diy/issues/19.

</details>

---

Got more questions? Feel free to reach out or open an issue in our GitHub repo!
=======
## FAQ

### How do I get the best results with bolt.diy?

- **Be specific about your stack**: If you want to use specific frameworks or libraries (like Astro, Tailwind, ShadCN, or any other popular JavaScript framework), mention them in your initial prompt to ensure bolt scaffolds the project accordingly.

- **Use the enhance prompt icon**: Before sending your prompt, try clicking the 'enhance' icon to have the AI model help you refine your prompt, then edit the results before submitting.

- **Scaffold the basics first, then add features**: Make sure the basic structure of your application is in place before diving into more advanced functionality. This helps Bolt.diy understand the foundation of your project and ensure everything is wired up right before building out more advanced functionality.

- **Batch simple instructions**: Save time by combining simple instructions into one message. For example, you can ask Bolt.diy to change the color scheme, add mobile responsiveness, and restart the dev server, all in one go saving you time and reducing API credit consumption significantly.

### Why are there so many open issues/pull requests?

bolt.diy was started simply to showcase how to edit an open source project and to do something cool with local LLMs on my (@ColeMedin) YouTube channel! However, it quickly grew into a massive community project that I am working hard to keep up with the demand of by forming a team of maintainers and getting as many people involved as I can. That effort is going well and all of our maintainers are ABSOLUTE rockstars, but it still takes time to organize everything so we can efficiently get through all the issues and PRs. But rest assured, we are working hard and even working on some partnerships behind the scenes to really help this project take off!

### How do local LLMs fair compared to larger models like Claude 3.5 Sonnet for bolt.diy/bolt.new?

As much as the gap is quickly closing between open source and massive close source models, you’re still going to get the best results with the very large models like GPT-4o, Claude 3.5 Sonnet, and DeepSeek Coder V2 236b. This is one of the big tasks we have at hand - figuring out how to prompt better, use agents, and improve the platform as a whole to make it work better for even the smaller local LLMs!

### I'm getting the error: "There was an error processing this request"

If you see this error within bolt.diy, that is just the application telling you there is a problem at a high level, and this could mean a number of different things. To find the actual error, please check BOTH the terminal where you started the application (with Docker or pnpm) and the developer console in the browser. For most browsers, you can access the developer console by pressing F12 or right clicking anywhere in the browser and selecting “Inspect”. Then go to the “console” tab in the top right.

### I'm getting the error: "x-api-key header missing"

We have seen this error a couple times and for some reason just restarting the Docker container has fixed it. This seems to be Ollama specific. Another thing to try is try to run bolt.diy with Docker or pnpm, whichever you didn’t run first. We are still on the hunt for why this happens once and a while!

### I'm getting a blank preview when bolt.diy runs my app!

We promise you that we are constantly testing new PRs coming into bolt.diy and the preview is core functionality, so the application is not broken! When you get a blank preview or don’t get a preview, this is generally because the LLM hallucinated bad code or incorrect commands. We are working on making this more transparent so it is obvious. Sometimes the error will appear in developer console too so check that as well.

### Everything works but the results are bad

This goes to the point above about how local LLMs are getting very powerful but you still are going to see better (sometimes much better) results with the largest LLMs like GPT-4o, Claude 3.5 Sonnet, and DeepSeek Coder V2 236b. If you are using smaller LLMs like Qwen-2.5-Coder, consider it more experimental and educational at this point. It can build smaller applications really well, which is super impressive for a local LLM, but for larger scale applications you want to use the larger LLMs still!

### Received structured exception #0xc0000005: access violation

If you are getting this, you are probably on Windows. The fix is generally to update the [Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

### How to add an LLM:

To make new LLMs available to use in this version of bolt.new, head on over to `app/utils/constants.ts` and find the constant MODEL_LIST. Each element in this array is an object that has the model ID for the name (get this from the provider's API documentation), a label for the frontend model dropdown, and the provider. 

By default, many providers are already implemented, but the YouTube video for this repo covers how to extend this to work with more providers if you wish!

When you add a new model to the MODEL_LIST array, it will immediately be available to use when you run the app locally or reload it.
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e
