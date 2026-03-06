//UrlShortnerHook 
import { useState } from 'react'

function UrlShortner(){
  const API_KEY = import.meta.env.VITE_API_KEY

  const [inputUrl,setInputUrl] = useState('')
  const [shortendUrl, setShortendUrl] = useState([])
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
      try {
          await navigator.clipboard.writeText(shortendUrl);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
          alert("Recipe Copied!")
      } catch (err) {
          console.error('Failed to copy text: ', err);
          alert("Couldn't copy the recipe")
      }
    };

  const handleSubmit = (e) => {
    console.log("lets make pancakes (link shortner clicked)")
    e.preventDefault()
    setShortendUrl(prev => [...prev]) 
    console.dir("What does this do? 1",shortendUrl)
    console.log("What does this do? 2",inputUrl)

    fetch('https://spoo.me/api/v1/shorten',{
      method:"POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": 'application/json'
      },
    body: JSON.stringify({
        long_url: inputUrl,
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log("fetching data", shortendUrl)

      setShortendUrl([...shortendUrl,res.short_url]) 
      setInputUrl("")
      console.log(res)})
    .catch(err => console.error(err));
  }
  



  return(
    <>
      <div style={{width:"700px", border:"2px solid black"}}>
        <p>Shorten Section Here</p>
          <form onSubmit={handleSubmit}>
            <input type="url" id="url" placeholder="Shorten a link here..." 
              value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} style={{width:"400px"}} required/>
            <button id="shortenItBtn" type="submit">Shorten It!</button> 
          </form>
          <div id="shortnedUrl">
            <ul style={{listStyle:"none"}}>
              {shortendUrl.map((url,index) => (<li key={index}> { url } <button onClick={()=>copyToClipboard(url)}>copy</button></li>))}
            </ul>
          </div>
      </div>
    </>
  );
}

export default UrlShortner

// Url Shortner Documentation
// https://docs.spoo.me/api-reference/url-shortening/create-shortened-url
//
// Array Documentation 
// https://react.dev/learn/updating-arrays-in-state
//
// I found another cool react feature (Copy) // Error this is outdated, but it looked like fun, 
// I will use normal coding method
// https://coderpad.io/blog/development/how-to-build-a-url-shortener-in-react-with-shrtcode/
// https://medium.com/@plsreeparvathy/copy-to-clipboard-feature-with-react-and-mui-065afa55f866 (This works)
//
// Console Logging
// https://developer.chrome.com/docs/devtools/console/reference
//
// I'm not doing anything extra yet, but more documentation (for Toasty)
// https://fkhadra.github.io/react-toastify/introduction/

//<div id="space">
//<div class="container" id="urlSection">
//  <input type="text" id="url" placeholder="Shorten a link here..." required>
//
//  <button id="shortenItBtn">Shorten It!</button>
// </div>
//<ul id="links"></ul>
//</div>

// // fetch('https://spoo.me/api/v1')
// import {API_KEY} from "./secret.js"

// const shortenItBtn = document.getElementById("shortenItBtn");
// const links = document.getElementById("links");
  
// shortenItBtn.addEventListener("click", shortenLink);

// async function shortenLink(){
//   let urlInput = document.getElementById("url").value.trim();
//   console.log("Short Stack coming up");

//   if (urlInput === ""){
//     alert ("please enter a url")
//     return;
//   }

//   try { 
//   const response = await
//   fetch ("https://spoo.me/api/v1/shorten", {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         authorization: `bearer ${API_KEY}`
//     },
//     body: JSON.stringify({
//         long_url: urlInput
//     })
  
// });

//   const data = await response.json();

//   console.log("API fetch status:", data);

//   const shortUrl = data.short_url || data.shorturl;

//   const storedLinks = JSON.parse(localStorage.getItem("links")) || [];

//   storedLinks.push({
//     original:urlInput,
//     short:shortUrl,
//   })

//   localStorage.setItem("links",JSON.stringify(storedLinks));

//   renderLinks();

//   }
//   catch (error){
//     console.error("Failed to shorten links:",error)
//     alert("Problems in the kitchen!")
//   }
// }

// // This is what adds li under the URL maker container, within the #space div ((Need to figure out how to add both original and shortened))
// function renderLinks() {
//   const linkShort = JSON.parse(localStorage.getItem("links")) || [];
//   links.innerText = "";

//   linkShort.forEach((link,index) => {
//     const li = document.createElement("li");
//     li.dataset.index = index;

//     console.log(link.short)

//     const a = document.createElement("a");
//     a.href = link.short;
//     a.innerText = link.short;
//     a.target = "_blank";

// li.appendChild(a)

//   const copyBtn = document.createElement("button");
//   copyBtn.innerText ="Copy";

//   copyBtn.addEventListener("click", () => {
//     const copyLink = a.innerText;
//     navigator.clipboard.writeText(copyLink)
//     // if (copyBtn.innerText === "Copy") { // need to figure out how to change the innerText of button to say COPIED
//     //   copyBtn.innerText === "Copied";
//     // }

//     alert("Copied the text: " + copyLink);

//     console.log("link copied")
//   });

//   li.appendChild(copyBtn)

//   links.append(li)
// })
// }
// renderLinks();
// console.log("Link added")