import './WhatWeDo.css'
import {useState} from "react";

export const WhatWeDo = function () {
    const [activeDuty, setActiveDuty] = useState(duties[0]);
    
    return <section id="what-we-do">
        <div className="content">
            <header>What We Do</header>
            <p className="subheader">Our dynamic learning program for refugee children this year features engaging
                weekly classes centered around three enriching subject themes, and aligning with our core student
                values.</p>
            <div className="duties">
                {duties.map(function (d) {
                    return <div key={d.title} className="group flex flex-col items-center gap-1"
                                onClick={() => setActiveDuty(d)}>
                        <button>{d.title}</button>
                        <svg
                            className={`opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none ${activeDuty === d ? 'active' : ''}`}
                            viewBox="0 0 227 10" fill="none">
                            <path d="M1 5C1 5 37.4838 14 113.556 5C189.629 -3.99996 226.113 5 226.113 5"
                                  stroke="#FEDB9B"
                                  strokeWidth="2"/>
                        </svg>
                    </div>
                })}
            </div>
            <div className="tasks">
                {activeDuty && activeDuty.tasks.map(task => (
                    <div className="task" key={task.title}>
                        <h4>{task.title}</h4>
                        <p>{task.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

class Duty {
    title: string
    tasks: Array<Task>
    
    constructor(title: string, tasks: Array<Task>) {
        this.title = title;
        this.tasks = tasks;
    }
}

class Task {
    title: string
    desc: string
    
    constructor(title: string, desc: string) {
        this.title = title;
        this.desc = desc;
    }
}

let duties: Duty[] = [
    new Duty(
        "Subject Themes",
        [
            new Task("English Communication", "In our learning program, English Communications is a core subject that equips students with vital language skills for effective communication, fostering integration, and opening doors to educational and professional opportunities."),
            new Task("Entrepreneurship", "Aspiring to foster self-reliance and economic empowerment, we incorporate Entrepreneurship in our learning program, empowering individuals with the skills and mindset needed to create their own opportunities and build thriving businesses in challenging circumstances."),
            new Task("Sustainability Education", "Recognizing the importance of environmental consciousness and responsible resource management, we include Sustainability Education in our learning program, empowering individuals to become agents of change and promoting sustainable practices for a better future."),
        ]
    ),
    new Duty(
        "Student Values",
        [
            new Task("Resilience", "Our students are equipped with the ability to cope with stress and adversity which includes their ability to handle difficult situations and challenges, and to bounce back from setbacks or failures."),
            new Task("Problem Solving", "Problem Solving skills will also help our students identify problems and come up with effective solutions. They are able to think critically and creatively in order to find ways to overcome challenges."),
            new Task("Emotional Intelligence", "Lastly with emotional intelligence training, our students learn how to regulate their emotions and behaviors effectively. They can manage their own actions and reactions, even in stressful or challenging situations."),
        ]
    )
]