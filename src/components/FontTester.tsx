import './FontTester.css'

/**
 * Font Tester Component - Helps identify which Floralipart2 character is the branch
 * Use this to find the correct character, then update Home.tsx
 */
const FontTester = () => {
  // Common characters to test in dingbat fonts
  const testCharacters = [
    // Letters
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    // Lowercase
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    // Numbers
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    // Common symbols
    '|', '(', ')', '[', ']', '{', '}', '/', '\\', '*', '+', '-', '=', '_',
    '!', '@', '#', '$', '%', '^', '&', '*', '?', '.', ',', ';', ':', 
    '"', "'", '`', '~', '<', '>'
  ]

  return (
    <div className="font-tester">
      <h1>Floralipart2 Font Character Tester</h1>
      <p>Look for the branch/twig design and note which character it is:</p>
      <div className="character-grid">
        {testCharacters.map((char, index) => (
          <div key={index} className="character-item">
            <div className="char-display">{char}</div>
            <div className="char-label">
              <code>{char}</code>
              {char.charCodeAt(0) && (
                <span className="char-code">U+{char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="instructions">
        <p><strong>Instructions:</strong></p>
        <ol>
          <li>Find the character that looks like the branch/twig from the screenshot</li>
          <li>Note the character shown (e.g., 'Q', 'S', etc.)</li>
          <li>Update Home.tsx line 81 with that character</li>
        </ol>
      </div>
    </div>
  )
}

export default FontTester

