const PROBLEMS = [
  {
    title: "Old customers go quiet",
    body: "Past clients drift to competitors. The studio that messages first wins the booking.",
  },
  {
    title: "Follow-ups never happen",
    body: "Customer lists sit unused because studios are busy tattooing all day.",
  },
  {
    title: "New customers hesitate",
    body: "Without seeing the design on their skin first, prospects walk out without booking.",
  },
];

export default function Problem() {
  return (
    <section className="section tex-grain divider" aria-label="The problem" data-reveal>
      <ol className="problems" data-stagger>
        {PROBLEMS.map((problem, i) => (
          <li className="problem" key={problem.title}>
            <span className="problem-num">0{i + 1}</span>
            <h2 className="problem-title">{problem.title}.</h2>
            <p className="problem-body">{problem.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
