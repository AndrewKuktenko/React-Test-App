import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reverted: false
        }
    }


    render() {
        console.log('RENDERED', this.state);
        return(
            <div className='container'>
                <div className="jumbotron">
                    <h1 className="display-3">App Name</h1>
                    <button className="btn btn-info" onClick={this.revert}>Revert</button>
                </div>

                <ArticleList articles = {this.state.reverted ? articles : articles.reverse()}/>
            </div>
        )
    }

    revert = () => {
        console.log("CLICKED");
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App