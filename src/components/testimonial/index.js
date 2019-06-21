import React from "react";
import "./index.scss";
import ReviewCard from "../reviewcard";

const Testimonial = () => {
  return (
    <div className="container mt-5">
      <h4 className="text-center mb-3" style={{ fontWeight: 300 }}>
        PEOPLE WHO WORKED WITH ME
      </h4>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <ReviewCard
            image="https://media.licdn.com/dms/image/C4D03AQG-n3cz9fI6mA/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=IOHsXvEYHEyjoffWNYIOh_CARKTeYXiAhJFqaXfY3tU"
            name="James C."
            title="Software Engineer"
            review="He has been very professional and very clear in all communications,
            which I appreciate."
          />
        </div>
        <div className="col-md-3">
          <ReviewCard
            image="https://media.licdn.com/dms/image/C5603AQFhXQ4EUZnLNw/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=SETNn72_F7f9XQWbmGfXXpNyaryQ8GoVt1IedSNhWiQ"
            name="Orrey M."
            title="Executive Consultant"
            review="This has been a very heavy project and Forhad have been more than able to handle it. You will not be disappointed."
          />
        </div>
        <div className="col-md-3">
          <ReviewCard
            image="https://media.licdn.com/dms/image/C4D03AQGU_dEIr_FrBQ/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=qMuYtigvBkpA94d-EyMHzIXoJ0v27TjbRqlmzc1J-fM"
            name="Jonny W."
            title="CTO, Adaptable Tools"
            review="He is an outstanding developer. He is so cooperative and hardworking. I will definitely hire him for work in future."
          />
        </div>
        <div className="col-md-3">
          <ReviewCard
            image="https://media.licdn.com/dms/image/C4E03AQGjDINQnWdeuw/profile-displayphoto-shrink_800_800/0?e=1566432000&v=beta&t=I31qbMa71KVoGLRCuwcvi2e84aXfegbQZ5Jfxttnx_Q"
            name="Ryan J."
            title="Recruitment Consultant"
            review="Good understanding of programming in general. Also punctual with deadlines, great communication and attitude towards work."
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
