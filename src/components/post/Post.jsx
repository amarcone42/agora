import { Button, Card } from "../../lib/mui"
import React from "react"
import './post.scss'

const Post = () => {
    return (
        <Card className="card">
            <div className='info'>
                <div className='profile-icon'>
                {/* User profile icon */}
                </div>
                <div className='user-info'>
                <h2>Francesco Bianchi</h2>
                <p>CatARTico</p>
                </div>
                <div className='post-type'>
                    {/* Post type icon */}
                </div>
            </div>
            <div className='content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique eleifend quam a efficitur. Cras aliquet magna vitae lectus ultricies laoreet. Nulla gravida turpis vitae accumsan sodales.</p>
            </div>
            <div className='interactions'>
                <Button variant="contained" color="primary">Hello, friend</Button>
            </div>
        </Card>
    )
}

export default Post