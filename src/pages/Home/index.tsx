import React from 'react';
import { Link } from 'react-router-dom';
type Props = Record<string, any>;
export default function Home(props: Props) {
    return (
        <div>
            Home
            <Link to="/player">Player</Link>
        </div>
    );
}
