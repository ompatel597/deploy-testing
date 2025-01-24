require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const myData = {
  login: "ompatel597",
  id: 79145036,
  node_id: "MDQ6VXNlcjc5MTQ1MDM2",
  avatar_url: "https://avatars.githubusercontent.com/u/79145036?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ompatel597",
  html_url: "https://github.com/ompatel597",
  followers_url: "https://api.github.com/users/ompatel597/followers",
  following_url:
    "https://api.github.com/users/ompatel597/following{/other_user}",
  gists_url: "https://api.github.com/users/ompatel597/gists{/gist_id}",
  starred_url: "https://api.github.com/users/ompatel597/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/ompatel597/subscriptions",
  organizations_url: "https://api.github.com/users/ompatel597/orgs",
  repos_url: "https://api.github.com/users/ompatel597/repos",
  events_url: "https://api.github.com/users/ompatel597/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/ompatel597/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "OM PATEL",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Loading...\r\n",
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-02-16T11:46:54Z",
  updated_at: "2025-01-12T10:30:08Z",
};

//get methods
app.get("/", (req, res) => {
  res.send("Hello Jonathan");
});

app.get("/mydata", (req, res) => {
  res.send(myData);
});

app.get("/twitter", (req, res) => {
  res.send("jonathandotcom");
});

app.get("/login", (req, res) => {
  res.send("Login please");
});

app.get("/data", (req, res) => {
  res.json(
    {
      number: 1,
      name: "Jonathan",
    },{
        num:2,
        name:'scout'
    })
});

//listen methods
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
