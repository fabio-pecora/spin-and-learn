import React from 'react'
import ai from '../images/ai.jpeg'
import students from "./StudentsPage"

const HomePage = (props) => {

    const openStudentsPage = url =>{
        window.open(url, "_self")
    }

    return (
        <div className='HomePage container'>
            <div className='left'>
                <div>
                    <h1>
                        Welcome to <span>Spin and Learn</span>.
                        <br />
                        Table Tennis For All Schools.
                    </h1>
                    <p>
                        We creates a high-trust school culture, and lays the foundation for sustained academic achievement.
                    </p>
                </div>
                <div className='buttons-container'>
                    <h4>Explore Our Solutions to Your Schools!</h4>
                    <div>
                        <button onClick={() => openStudentsPage('/students')} className='bg-hover'>
                            Students
                        </button>
                        <button className='bg-hover'>Leaders</button>
                        <button className='bg-hover'>Teachers</button>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img src={ai} alt="ilustrator-home" />
            </div>
        </div>
    )
}

export default HomePage

