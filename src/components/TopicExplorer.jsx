import { useEffect, useState } from 'react';
import './TopicExplorer.css';

const topics = [
  { id: 'cs-engineer', label: 'Code & Systems', number: '01', title: '把知识，变成可以运行的东西。', description: '从计算机基础到软件实践，记录每一次理解、拆解与构建。', href: '/cs-engineer/', keywords: ['COMPUTER SCIENCE', 'BUILDING', 'SYSTEMS'], color: '#c2ff62' },
  { id: 'ai-lab', label: 'AI & Experiments', number: '02', title: '在模型与现实之间，做一点实验。', description: '探索模型、智能体与工作流，观察 AI 如何进入真实的问题。', href: '/ai-lab/', keywords: ['MODELS', 'AGENTS', 'EXPERIMENTS'], color: '#86e1df' },
  { id: 'web3', label: 'Web3 & Beyond', number: '03', title: '让好奇心，越过学科的边界。', description: '连接 Web3、金融与生物医学，沿着问题，寻找新的视角。', href: '/web3/', keywords: ['WEB3', 'FINANCE', 'DESCI'], color: '#e8a5c9' },
];

export default function TopicExplorer({ posts }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [active, setActive] = useState('cs-engineer');
  const topic = topics.find((item) => item.id === active);
  const related = posts.filter((post) => post.category === active);
  return (
    <div className="topic-explorer" style={{ '--topic-color': topic.color }}>
      <div className="topic-toolbar"><span className="topic-terminal"><span aria-hidden="true">●</span> curiosity.run</span><span>选择一个探索方向 ↓</span></div>
      <div className="topic-controls" role="group" aria-label="选择探索方向">
        {topics.map((item) => <button key={item.id} type="button" disabled={!ready} aria-pressed={active === item.id} aria-controls="topic-result" onClick={() => setActive(item.id)}><span>{item.number}</span>{item.label}<span aria-hidden="true">↗</span></button>)}
      </div>
      <div id="topic-result" className="topic-result" aria-live="polite" aria-atomic="true">
        <div className="topic-copy" key={topic.id}>
          <div className="topic-keywords">{topic.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
          <h3>{topic.title}</h3><p>{topic.description}</p>
          <a className="topic-enter" href={topic.href}>进入这个方向 <span aria-hidden="true">↗</span></a>
        </div>
        <div className="topic-notes"><span className="topic-notes-label">FIELD NOTES / 相关笔记</span>
          {related.length ? related.slice(0, 2).map((post) => <a key={post.url} href={post.url}><span>{post.date}</span><h4>{post.title} <span aria-hidden="true">↗</span></h4></a>) : <div className="topic-empty"><span aria-hidden="true">[ … ]</span><p>这里的想法，还在生长中。</p><span>整理好的笔记会陆续放在这里。</span></div>}
        </div>
      </div>
      <div className="topic-bottom"><span>~/miyuki/{active}</span><span>{String(related.length).padStart(2, '0')} NOTES</span></div>
    </div>
  );
}
