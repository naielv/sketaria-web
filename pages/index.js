import TestPageOne from "@components/TestPageOne"
import Header from "@components/Header"
export default function Home() {
  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <TestPageOne></TestPageOne>
      <Header title="Sketaria Web" />
    </div>
  )
}