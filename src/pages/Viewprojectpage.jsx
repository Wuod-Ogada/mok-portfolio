import apps from '../apps.json'

const Viewprojectpage = () => {
  return (
    <div >
      {apps.map((app) =>(
        <div key={app.id}>
           <div>{app.title}</div>
           <div>{app.description}</div>
        </div> 
      ))}
    </div>
  )
}

export default Viewprojectpage