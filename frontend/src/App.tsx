import { useState } from 'react'
import './App.css'

type Priority = 'Low' | 'Medium' | 'High'

type SupportRequest = {
  id: string
  title: string
  description: string
  priority: Priority
  status: 'Open'
}

function isPriority(value: string): value is Priority {
  return value === 'Low' || value === 'Medium' || value === 'High'
}

function App() {
  const [requests, setRequests] = useState<SupportRequest[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>('Medium')
  const [message, setMessage] = useState('')

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedDescription = description.trim()

    if (!trimmedTitle || !trimmedDescription) {
      setMessage('Enter a title and description containing more than spaces.')
      return
    }

    const newRequest: SupportRequest = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      description: trimmedDescription,
      priority,
      status: 'Open',
    }

    setRequests(previousRequests => [newRequest, ...previousRequests])
    setTitle('')
    setDescription('')
    setPriority('Medium')
    setMessage(`Request created: ${newRequest.title}`)
  }

  return (
    <main className="tracker">
      <header className="tracker-header">
        <p className="eyebrow">SUPPORT REQUEST TRACKER</p>
        <h1>Keep requests moving.</h1>
        <p>Create a request and keep track of what needs attention.</p>
        <p className="demo-notice">
          Demo in progress. Requests are stored in memory and disappear
          when you refresh. Please use fictional information.
        </p>
      </header>

      <div className="tracker-layout">
        <section aria-labelledby="create-request-title">
          <h2 id="create-request-title">Create a request</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="request-title">Title</label>
              <input
                id="request-title"
                name="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
                maxLength={100}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="request-description">Description</label>
              <textarea
                id="request-description"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
                rows={5}
                maxLength={2000}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="request-priority">Priority</label>
              <select
                id="request-priority"
                name="priority"
                value={priority}
                onChange={event => {
                  const value = event.target.value

                  if (isPriority(value)) {
                    setPriority(value)
                  }
                }}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <button type="submit">Create request</button>

            <p className="form-message" role="status">
              {message}
            </p>
          </form>
        </section>

        <section aria-labelledby="request-list-title">
          <h2 id="request-list-title">
            Requests ({requests.length})
          </h2>

          {requests.length === 0 ? (
            <p>No requests yet. Create one using the form.</p>
          ) : (
            <ul className="request-list">
              {requests.map(request => (
                <li key={request.id} className="request-card">
                  <h3>{request.title}</h3>
                  <p>{request.description}</p>
                  <dl>
                    <div>
                      <dt>Priority</dt>
                      <dd>{request.priority}</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>{request.status}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default App