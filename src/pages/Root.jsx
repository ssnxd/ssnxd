import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import AllPost from "./AllPost";

const projectList = [
  {
    link: "https://github.com/LazzyGuy/Threejs-Editor",
    name: "A threejs based web Editor",
    title: "Threejs Editor",
  },
  {
    link: "https://github.com/LazzyGuy/banyanTreeBeta",
    name: "A connectivity platform for Students & teachers",
    title: "Banyan Tree",
  },
  {
    link: "https://github.com/lekha-chitr/core",
    name: "An ongoing data visualization project.",
    title: "Lekha Chitra",
  },
];

const social = [
  {
    name: "github",
    link: "https://github.com/ssnxd",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ssnxd",
  },
  {
    name: "twitter",
    link: "https://twitter.com/ssnxd_",
  },
  {
    name: "CV latest",
    link: `https://docs.google.com/document/d/15Wb5M-BRgVt5deT95ojrPn9Z_yWSMSkHucpmz-ILnAM/edit#heading=h.wqv1t5vx3fme`,
  },
  {
    name: "CV(pdf)",
    link: `/cv_surajnegi.pdf`,
  },
];

//const blogContainer = ({ match }) => <Blog blogId={match.params.blogId} />;

export const latestBlog = [];

export default class extends Component {
  getBlogData() {
    return latestBlog.map((item) => (
      <li className="blog-list" key={item.id}>
        <span className="blog-data">{item.created}</span>-
        <Link to={`/blog/${item.id}`} className="blog-link">
          {item.name}
        </Link>
      </li>
    ));
  }

  getProjectData() {
    return projectList.map((item) => (
      <li className="project-list" key={item.link}>
        <a
          href={item.link}
          rel="noopener noreferrer"
          target="_blank"
          className="project-link"
        >
          {item.title}
        </a>
        ,<span className="project-data">{item.name}</span>
      </li>
    ));
  }

  getSocialList() {
    return social.map((item) => (
      <li className="social-list" key={item.link}>
        <a
          href={item.link}
          rel="noopener noreferrer"
          target="_blank"
          className="social-link"
          download
        >
          {item.name}
        </a>
      </li>
    ));
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                blog={this.getBlogData()}
                project={this.getProjectData()}
                social={this.getSocialList()}
              />
            )}
          />
          <Route path="/(allpost|blog)/" exact component={() => <AllPost />} />
          <Route
            path="/blog/:blogId/"
            component={({ match }) => <Blog blogId={match.params.blogId} />}
          />
        </Switch>
      </Router>
    );
  }
}
