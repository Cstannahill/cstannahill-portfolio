# Code Components - Quick Reference Card

## 🎯 When to Use What

| You Need            | Use This                      | Example                       |
| ------------------- | ----------------------------- | ----------------------------- |
| Single code example | Plain markdown                | ` ```bash<br>npm install``` ` |
| Multiple tabs       | `<CodeTabs examples={[...]}>` | See below                     |
| ❌ Don't use        | `<CodeBlock>` wrapper         | Never wrap markdown blocks    |
| ❌ Don't use        | `<CodeTab>` children          | Use examples prop instead     |

---

## ✅ Correct Patterns

### Pattern 1: Single Code Block

````markdown
### Installation

```bash
npm install -g @farm-framework/cli
```
````

````

### Pattern 2: Multiple Tabs with CodeTabs

```jsx
### Cross-Platform Installation

<CodeTabs examples={[
  {
    language: "bash",
    label: "macOS",
    code: `brew install ollama`
  },
  {
    language: "bash",
    label: "Linux",
    code: `curl -fsSL https://ollama.ai/install.sh | sh`
  },
  {
    language: "powershell",
    label: "Windows",
    code: `winget install Ollama.Ollama`
  }
]} />
````

### Pattern 3: Multi-line Code in Tabs

```jsx
<CodeTabs
  examples={[
    {
      language: "bash",
      label: "Quick Start",
      code: `# Install CLI
npm install -g @farm/cli

# Create project
farm create my-app
cd my-app

# Start dev server
farm dev`,
    },
    {
      language: "bash",
      label: "With Template",
      code: `# Use template
farm create my-app --template ai-chat

# With features
farm create my-app --features auth,ai,realtime`,
    },
  ]}
/>
```

**Key Points:**

- Use template literals (backticks) for the `code` value
- Multi-line code works perfectly with template literals
- Comments and empty lines are preserved

---

## ❌ Common Mistakes

### Mistake 1: Wrapping Markdown in CodeBlock

````markdown
<!-- ❌ WRONG -->
<CodeBlock language="bash">
  npm install
</CodeBlock>

<!-- ✅ CORRECT -->

```bash
npm install
```
````

````

### Mistake 2: Using CodeTab Children Pattern
```markdown
<!-- ❌ NOT RECOMMENDED -->
<CodeTabs>
  <CodeTab value="bash" label="Bash">
    ```bash
    npm install
    ```
  </CodeTab>
</CodeTabs>

<!-- ✅ RECOMMENDED -->
<CodeTabs examples={[
  {
    language: "bash",
    label: "Bash",
    code: `npm install`
  }
]} />
````

### Mistake 3: Missing Required Props

```jsx
<!-- ❌ WRONG - Missing language -->
<CodeTabs examples={[
  {
    label: "Example",
    code: `npm install`
  }
]} />

<!-- ✅ CORRECT -->
<CodeTabs examples={[
  {
    language: "bash",
    label: "Example",
    code: `npm install`
  }
]} />
```

---

## 📋 CodeTabs Examples Array Structure

```typescript
interface CodeExample {
  language: string; // REQUIRED: "bash", "typescript", "python", etc.
  label: string; // REQUIRED: Tab button text
  code: string; // REQUIRED: The actual code (use template literals)
}
```

### Supported Languages

- `bash` - Bash/Shell scripts
- `typescript` - TypeScript
- `javascript` - JavaScript
- `python` - Python
- `json` - JSON
- `yaml` - YAML
- `powershell` - PowerShell
- `sql` - SQL
- And many more (powered by Prism.js)

---

## 🔍 How It Works

### Plain Markdown Code Blocks

````
Your MDX:          ```bash
                   npm install
                   ```
                       ↓
MDX Processes:     <pre><code className="language-bash">
                   npm install
                   </code></pre>
                       ↓
MDXComponents:     Intercepts <pre> tag
                       ↓
Routes to:         <CodeBlock> component
                       ↓
Renders:           Syntax highlighted code with copy button
````

### CodeTabs with Examples

```
Your MDX:          <CodeTabs examples={[{...}]} />
                       ↓
Component:         CodeTabs processes examples array
                       ↓
Renders:           Tab buttons + CodeBlock for each example
                       ↓
Result:            Tabbed interface with syntax highlighting
```

---

## 🎨 Styling Notes

- CodeBlock automatically adds:

  - Language badge in header
  - Copy button with feedback
  - Line numbers (for code > 5 lines)
  - Syntax highlighting (oneDark theme)
  - Rounded corners and borders

- CodeTabs automatically adds:
  - Tab navigation buttons
  - Active tab highlighting (emerald color)
  - Smooth transitions between tabs
  - Connected styling with code block below

---

## 🚀 Real-World Examples

### Example 1: CLI Installation Steps

```jsx
<CodeTabs
  examples={[
    {
      language: "bash",
      label: "Create Project",
      code: `# Install FARM CLI
npm install -g @farm/cli

# Create new project
farm create my-app
cd my-app

# Start development server
farm dev`,
    },
    {
      language: "bash",
      label: "With Template",
      code: `# Create AI chat app
farm create my-chat --template ai-chat

# Create with specific features
farm create my-app --features auth,ai,realtime

# List available templates
farm templates list`,
    },
  ]}
/>
```

### Example 2: API Response Types

```jsx
<CodeTabs
  examples={[
    {
      language: "python",
      label: "Python (Backend)",
      code: `from pydantic import BaseModel
from datetime import datetime

class User(BaseModel):
    id: str
    name: str
    email: str
    created_at: datetime`,
    },
    {
      language: "typescript",
      label: "TypeScript (Generated)",
      code: `// Auto-generated from Python model
interface User {
  id: string;
  name: string;
  email: string;
  created_at: string;
}`,
    },
  ]}
/>
```

### Example 3: Database Queries

```jsx
<CodeTabs
  examples={[
    {
      language: "python",
      label: "Python",
      code: `# Using Motor (async MongoDB)
users = await db.users.find(
    {"status": "active"}
).sort("created_at", -1).limit(10).to_list()`,
    },
    {
      language: "javascript",
      label: "JavaScript",
      code: `// Using MongoDB Node.js driver
const users = await db.collection('users')
  .find({ status: 'active' })
  .sort({ created_at: -1 })
  .limit(10)
  .toArray();`,
    },
  ]}
/>
```

---

## 📚 Additional Resources

- Full documentation: `CODE_COMPONENTS_DOCUMENTATION.md`
- Component source: `components/shared/CodeBlock.tsx`
- Component source: `components/shared/CodeTabs.tsx`
- MDX registration: `components/content/MDXComponents.tsx`

---

## 🎓 Summary

**Remember:**

1. ✅ Use plain markdown for single code blocks
2. ✅ Use `<CodeTabs examples={[...]}>` for multiple tabs
3. ❌ Never wrap markdown in `<CodeBlock>` tags
4. ❌ Avoid `<CodeTab>` children pattern
5. 💡 Use template literals for multi-line code in examples

**That's it! You're ready to add beautiful code examples to your MDX files.**
