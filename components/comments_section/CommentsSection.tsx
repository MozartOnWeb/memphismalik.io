export default function CommentsSection() {
  return (
    <div className="comments_section">
      <div className="separator">
        <div />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EFEFEF"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-message-circle"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
        <div />
      </div>

      <div className="comments"></div>
    </div>
  );
}
