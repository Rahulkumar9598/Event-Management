import{ useState} from 'react'





const About = () => {
    const [a, setA] = useState(10)
  return (
    <div>
        <p>{a}</p>
        <button onClick={() => setA(a + 5)}>Click me</button>
    
    </div>
  )
}

export default About