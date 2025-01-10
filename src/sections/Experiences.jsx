import experience from "../experience.json";

const Experiences = () => {
  return (
    <section className="section">
      <div>
        <h2>Work Experience</h2>
      </div>
      <div>
        <div>
          <h4>Skills</h4>
        </div>
        <div>
          <ul className='md:flex '>
            <li>Project Coordination</li>
            <li>Customer Relationship Management</li>
            <li>Technical Support Representative</li>
          </ul>
        </div>
      </div>
      
      <div > {/* jobs*/}
        { experience.map((experience) => (
          <div key={experience.id} className="md:flex ">
            <div className="flex justify-between">
                <div>
                  {experience.title}
                </div>
                <div>
                  <div>{experience.company}</div>
                  <div>{experience.location}</div>
                  <div>{experience.duration}</div>
                </div>
            </div>
            <div>
              <p>
                {experience.description}
              </p>
            </div>
         </div>
        )) }
      </div>

    </section>
  );
}

export default Experiences;
