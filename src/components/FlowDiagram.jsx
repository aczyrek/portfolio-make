import './FlowDiagram.css'

const nodes = [
  { icon: '📋', label: 'Trigger', sub: 'Input', color: '#58A6FF' },
  { icon: '⚡', label: 'Process', sub: 'Make.com', color: '#A371F7' },
  { icon: '🧠', label: 'Analyze', sub: 'AI Model', color: '#3FB950' },
  { icon: '📊', label: 'Output', sub: 'Report', color: '#58A6FF' },
]

export default function FlowDiagram() {
  return (
    <div className="flow">
      <div className="flow__header">
        <span className="flow__dot flow__dot--green" />
        <span className="flow__dot flow__dot--yellow" />
        <span className="flow__dot flow__dot--red" />
        <span className="flow__title">automation.flow</span>
      </div>
      <div className="flow__body">
        {nodes.map((node, i) => (
          <div key={i} className="flow__step" style={{ '--delay': `${i * 0.18}s` }}>
            <div className="flow__node" style={{ '--node-color': node.color }}>
              <div className="flow__node-icon">{node.icon}</div>
              <div className="flow__node-label">{node.label}</div>
              <div className="flow__node-sub">{node.sub}</div>
              <div className="flow__node-ring" />
            </div>
            {i < nodes.length - 1 && (
              <div className="flow__connector">
                <div className="flow__line" />
                <div className="flow__pulse" style={{ '--delay': `${i * 0.4}s` }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flow__status">
        <span className="flow__status-dot" />
        <span>Running — 847 tasks processed today</span>
      </div>
    </div>
  )
}
