import axios from 'axios';
import { useState, useEffect } from 'react'

function Demo() {
    const [state, setState] = useState([]);
    useEffect(() => {
        axios.get("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0")
            .then((res) => {
                console.log(res);
                setState(res.data);
            })
            .catch(() => {
                alert("Failed to Fetch Data")
            })
    })
    return (
        <div>
            <h1 style={{ backgroundColor: "blue", textAlign: "center", color: "white" }}>Polling App Post</h1>
            <table style={{ borderStyle: "solid", width: "100%", backgroundColor: "black", color: "white", marginTop: "5px" }} >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Link</th>
                        <th>Created At</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((post, index) => (
                            <tr key={index}>
                                <td>{post.title}</td>
                                <td>{post.url}</td>
                                <td>{post.created_at}</td>
                                <td>{post.author}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Demo