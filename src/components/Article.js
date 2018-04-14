import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen;
    // }

    componentWillUpdate() {
        console.log('--- UPDATE');
    }


    // componentWillReceiveProps(nextProps) {
    //     if (this.state.defaultOpen !== nextProps.defaultOpen) {
    //         this.setState({
    //             isOpen: nextProps.defaultOpen
    //         })
    //     }
    // }

    // state = {
    //     isOpen:true
    // }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={{width:'50%'}}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        Clicked {this.state.count}
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }

    // handleClick = () => {
    //     // this.setState({
    //     //     isOpen: !this.state.isOpen
    //     // });
    // }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
}

export default Article