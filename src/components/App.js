import React from "react";
import PostList from "./PostList";
class App extends React.Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
