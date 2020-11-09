import React, { Fragment } from "react"
import { RouteComponentProps } from "react-router-dom"
// import { IChirp } from "../client/utils/types"

export default class newChirp extends React.Component<IListProps, IListState>  {
    constructor(props: IListProps) {
        super(props)
        this.state = {
            name: "",
            text: ""
        }
    }
    submitChirp = (name: string, text: string) => {
        fetch("/api/chirps", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, text })
        })
            .then(res => this.props.history.push('/'))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>)  => { this.setState({ name: e.target.value }) }} value={this.state.name} />
                <input id="username-input" className="form-control my-2" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { this.setState({ text: e.target.value }) }} value={this.state.text} />
                <button className="btn btn-dark" type="submit" onClick={this.submitChirp}>
                    Add Chirp!
                    </button>
            </div>
        )
    }
}

interface IListProps extends RouteComponentProps<{ name: string }> {

}

interface IListState {
    name: string,
    text: string
}
