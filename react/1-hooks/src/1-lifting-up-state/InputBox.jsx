function InputBox({ text, setText }) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="input..."
      />
    </div>
  );
}

export default InputBox;
