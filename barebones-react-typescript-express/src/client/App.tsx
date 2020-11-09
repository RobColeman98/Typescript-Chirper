import React, { Fragment } from "react"
import { RouteComponentProps } from "react-router-dom"
import { IChirp } from "../client/utils/types"
import Home from "./Home"
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import newChirp from "./newChirp"
import chirpID from "./chirpID"



class App extends React.Component<IAppProps, IAppState>  {
    constructor(props: IAppProps) {
        super(props)
        // this.state.name
        // this.state.text
        this.state = {
            chirps: []
        }

    }


    async componentDidMount() {
        try {
            let r = await fetch('/api/chirps');
            let chirps = await r.json();
            this.setState({ chirps: chirps });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <Router>
                <h1>Chirper... yet again!</h1>

                <Link to="/newChirp">
                    <button>Add Chirps!</button>
                    
                </Link>




                <Link to="/chirp/:id/admin">
                    <button>Admin Options</button>
                </Link>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/newChirp" component={newChirp} />

                </Switch>
            </Router>
        )//  (<h1 key={chirp.id}>{chirp.username}{chirp.message}</h1>)
    }
}

interface IAppProps {

}
export interface IAppState {
    chirps: chirps[];
}
export interface chirps {
    name: string,
    text: string;
}


export default App;