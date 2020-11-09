import { IChirp } from "./utils/types"
import React, { Fragment } from "react"
export default class Home extends React.Component<IListProps, IListState> {

    constructor(props: IListProps) {
        super(props);
        this.state = {
            chirps: []
        }
    }
    componentDidMount() {
        this.fetchChirps()
    }

    fetchChirps = () => {
        fetch("/api/chirps")
            .then(data => data.json())
            .then(data => this.setState({ chirps: data }))
            .catch(err => console.log(err));
    }

    deleteChirp = async id => {
        try {
            let res = await fetch(`api/chirps/${id}`, { method: "DELETE" })
            this.fetchChirps()
            console.log(res);
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return this.state.chirps.map((chirp: IChirp) => (
            <div key={chirp.id} className="card text-white bg-dark mb-3">
                <div className="card-header text">{chirp.name}</div>
                <div className="card-body">
                    <p className="card-text text">{chirp.text}</p>
                    <button className="btn btn-dark btn-sm" onClick={()=> this.deleteChirp(chirp.id)}>Delete</button>
                </div>
            </div>
        )) // (<h1 key={chirp.id}>{chirp.username}{chirp.message}</h1>)
    }
}

interface IListProps {

}

interface IListState {
    chirps: Array<object>;
}


