function AnimatedText({ text, as: Tag = 'span', className = '' }) {
  const classes = ['animated-text', className].filter(Boolean).join(' ')

  return (
    <Tag className={classes} aria-label={text}>
      {text.split(' ').map((word, wordIndex, words) => (
        <span className="animated-text-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
          {word.split('').map((letter, letterIndex) => (
            <span className="animated-text-letter" key={`${letter}-${letterIndex}`}>
              {letter}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span className="animated-text-space">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}

export default AnimatedText
