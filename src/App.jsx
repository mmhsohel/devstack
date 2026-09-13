import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyCard from './components/TechnologyCard'
import StackPanel from './components/StackPanel'
import FAQ from './components/Faq'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        // Small artificial delay so loading state is noticeable
        await new Promise((r) => setTimeout(r, 400))
        const res = await fetch('/technologies.json')
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        setTechnologies(data)
      } catch (err) {
        console.error(err)
        toast.error('Failed to load technologies')
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  const removeFromStack = (id) => {
    const tech = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((item) => item.id !== id))
    if (tech) toast.info(`${tech.name} removed from stack`)
  }

  const removeAll = () => {
    if (stack.length === 0) return
    setStack([])
    toast.info('Stack cleared')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Explore the <span className="text-brand-gradient">Technologies</span>
            </h2>
            <p className="mt-2 text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <span className="loading loading-spinner loading-lg text-primary"></span>
              <p className="text-gray-500">Loading technologies...</p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cards grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechnologyCard
                    key={tech.id}
                    tech={tech}
                    isAdded={stack.some((s) => s.id === tech.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>

              {/* Your Stack sidebar */}
              <div className="lg:w-80 shrink-0">
                <StackPanel
                  stack={stack}
                  onRemove={removeFromStack}
                  onRemoveAll={removeAll}
                />
              </div>
            </div>
          )}
        </section>
         <FAQ />
      </main>
     
      <Footer />
    </div>
  )
}

export default App
