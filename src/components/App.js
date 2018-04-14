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

        return(
            <div className='container'>
                <div className="jumbotron">
                    <h1 className="display-3">App Name</h1>
                    <button className="btn btn-info" onCkick={this.handleClick()}>App Name</button>
                </div>

                <ArticleList articles = {articles}/>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App