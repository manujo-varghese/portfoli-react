import React from 'react'
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work"
import {
    VerticalTimeline,
     VerticalTimelineElement
    } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Experience() {
  return (
    <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
            className="vertical-timeline-element--education" 
             date="2022 - Current"
             iconStyle={{ background:"#3e497a", color:"#fff"}}
             icon={<SchoolIcon />}>
               <h3 className="vertical-timeline-element--title"> Deakin University Melbourne</h3>
               <p> Doctor of Philosophy PhD</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education" 
             date="2019 June - 2021 August "
             iconStyle={{ background:"#3e497a", color:"#fff"}}
             icon={<SchoolIcon />}>
               <h3 className="vertical-timeline-element--title"> Deakin University Melbourne</h3>
               <p> Master of Data Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education" 
             date="2022 February- Current"
             iconStyle={{ background:"#e9d35b", color:"#fff"}}
             icon={<WorkIcon />}>
               <h3 className="vertical-timeline-element--title"> Pioneera Pvt Ltd</h3>
               <p> Full Stack Engineer</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education" 
             date="2021 September - 2022 February"
             iconStyle={{ background:"#e9d35b", color:"#fff"}}
             icon={<WorkIcon />}>
               <h3 className="vertical-timeline-element--title">Two Bulls Pvt Ltd</h3>
               <p> Full Stack Engineer</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education" 
             date="2020 March - 2020 June"
             iconStyle={{ background:"#e9d35b", color:"#fff"}}
             icon={<WorkIcon />}>
               <h3 className="vertical-timeline-element--title"> Medical SAAS Pvt Ltd</h3>
               <p>  Full Stack Engineer</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education" 
             date="2017 June - 2019 June"
             iconStyle={{ background:"#3e497a", color:"#fff"}}
             icon={<WorkIcon />}>
               <h3 className="vertical-timeline-element--title"> Infosys Pvt Ltd</h3>
               <p> Software Engineer</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience