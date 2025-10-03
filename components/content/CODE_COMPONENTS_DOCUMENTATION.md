# Code Components Documentation

## Quick Start Guide

### When to Use What

| Scenario                  | Component                  | Pattern                 |
| ------------------------- | -------------------------- | ----------------------- |
| **Single code block**     | None (plain markdown)      | ` ```language `         |
| **Multiple tabs/options** | `<CodeTabs>`               | `examples={[...]}` prop |
| **NOT RECOMMENDED**       | `<CodeTabs>` with children | `<CodeTab>` children    |

### Example Usage

**Single Code Block:**

````markdown
```bash
npm install @farm/cli
```
````

````

**Multiple Tabs:**
```jsx
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
  }
]} />
````

---

## Overview

This document provides a comprehensive analysis of CodeBlock and CodeTabs components, their props, structure, and correct usage patterns in MDX files.

---

## Component Analysis

### 1. CodeBlock Component

**File:** `components/shared/CodeBlock.tsx`

**Type:** Client Component (`"use client"`)

**Props:**

```typescript
interface CodeBlockProps {
  className?: string; // e.g., "language-typescript"
  children: ReactNode; // The code content
  language?: string; // Optional explicit language prop
}
```

**Purpose:**

- Renders a single code block with syntax highlighting
- Includes header with language badge and copy button
- Uses `react-syntax-highlighter` with `oneDark` theme

**How it works:**

1. Extracts code from children (handles MDX's nested structure)
2. Determines language from `className` (pattern: `language-*`) or explicit `language` prop
3. Renders header with language badge and copy button
4. Renders code with `SyntaxHighlighter`

**MDX Integration:**

- When you write triple backticks in MDX: ` ```typescript `
- MDX converts this to: `<pre><code className="language-typescript">code here</code></pre>`
- The `pre` element handler in MDXComponents intercepts this
- Routes it through CodeBlock component automatically

**✅ CORRECT Usage in MDX:**

````markdown
```bash
npm install -g @farm-framework/cli
```
````

````

**❌ INCORRECT Usage in MDX:**
```markdown
<CodeBlock language="bash">
npm install -g @farm-framework/cli
</CodeBlock>
````

_Why wrong: Creates double-wrapping and breaks code extraction logic_

---

### 2. CodeTabs Component

**File:** `components/shared/CodeTabs.tsx`

**Type:** Client Component (`"use client"`)

**Props:**

```typescript
interface CodeTabsProps {
  examples?: CodeExample[]; // Legacy prop (array of objects)
  children?: ReactNode; // Modern pattern (CodeTab components)
  defaultValue?: string; // Initial active tab value
  className?: string;
}

interface CodeExample {
  language: string;
  label: string;
  code: string;
}
```

**Purpose:**

- Creates tabbed interface for multiple code examples
- Supports two usage patterns: legacy (examples prop) and modern (children pattern)

**How it works:**

1. **Children Pattern (Modern):** Expects `<CodeTab>` children components
2. **Examples Pattern (Legacy):** Accepts array of code examples
3. Manages tab state with useState
4. Renders tab headers and conditionally shows active tab content

---

### 3. CodeTab Component

**File:** `components/shared/CodeTabs.tsx` (exported)

**Type:** Client Component (part of CodeTabs)

**Props:**

```typescript
interface CodeTabProps {
  value: string; // Unique identifier for this tab (REQUIRED)
  label: string; // Display text on tab button (REQUIRED)
  children: ReactNode; // The code content for this tab
}
```

**Purpose:**

- Defines individual tab within CodeTabs
- Simple wrapper that returns children (actual rendering handled by parent)

**Component Implementation:**

```typescript
export function CodeTab({ children }: CodeTabProps) {
  return <>{children}</>;
}
```

---

## Correct Usage Patterns

### Pattern 1: Single Code Block

**Use Case:** Single language, no tabs needed

````markdown
### Installation

```bash
npm install -g @farm-framework/cli
```
````

````

**Renders:** CodeBlock with bash syntax highlighting

---

### Pattern 2: CodeTabs with Children (MODERN PATTERN)

**Use Case:** Multiple related code examples (different languages, different OS, etc.)

**Structure:**
```markdown
<CodeTabs>
  <CodeTab value="unique-id-1" label="Display Label 1">
    ```language1
    code here
    ```
  </CodeTab>
  <CodeTab value="unique-id-2" label="Display Label 2">
    ```language2
    code here
    ```
  </CodeTab>
</CodeTabs>
````

**Example - Python vs TypeScript:**

````markdown
<CodeTabs>
  <CodeTab value="python" label="Python">
    ```python
    def hello():
        print("Hello World")
    ```
  </CodeTab>
  <CodeTab value="typescript" label="TypeScript">
    ```typescript
    function hello(): void {
      console.log("Hello World");
    }
    ```
  </CodeTab>
</CodeTabs>
````

**Example - Multiple OS Installation:**

````markdown
### Pattern 2: CodeTabs with Children (ALTERNATIVE PATTERN - NOT RECOMMENDED)

**Use Case:** Multiple related code examples (different languages, different OS, etc.)

**⚠️ NOTE:** While this pattern is supported by the component, the `examples` prop pattern (Pattern 3) is the recommended approach and what the component was designed for.

**Structure:**

````markdown
<CodeTabs>
  <CodeTab value="unique-id-1" label="Display Label 1">
    ```language1
    code here
    ```
  </CodeTab>
  <CodeTab value="unique-id-2" label="Display Label 2">
    ```language2
    code here
    ```
  </CodeTab>
</CodeTabs>
````

**Why Not Recommended:**

- Requires nested JSX structure in MDX
- More verbose than examples prop
- Harder to read and maintain
- Code must be in markdown blocks inside JSX
````

---

### Pattern 3: CodeTabs with Examples Prop (LEGACY)

**Use Case:** Programmatic code examples (rarely used in MDX)

**Structure:**

```jsx
<CodeTabs
  examples={[
    {
      language: "python",
      label: "Python",
      code: "print('hello')",
    },
    {
      language: "typescript",
      label: "TypeScript",
      code: "console.log('hello')",
    },
  ]}
/>
```

**Note:** This pattern is less common in MDX. Use children pattern instead.

---

## Common Mistakes & Fixes

### ❌ Mistake 1: Wrapping code in CodeBlock tags

```markdown
<CodeBlock language="bash">
  npm install -g @farm-framework/cli
</CodeBlock>
```

**Problem:**

- Creates incorrect nesting
- Code extraction logic expects MDX's pre/code structure
- Results in "[object Object]" or other rendering issues

**✅ Fix:**

````markdown
```bash
npm install -g @farm-framework/cli
```
````

````

---

### ❌ Mistake 2: Using CodeTabs without CodeTab children

```markdown
<CodeTabs language="bash" label="Installation">
  npm install -g @farm-framework/cli
</CodeTabs>
````

**Problem:**

- CodeTabs expects CodeTab children components
- `language` and `label` are not CodeTabs props
- Will render nothing or error

**✅ Fix:**

````markdown
<CodeTabs>
  <CodeTab value="bash" label="Installation">
    ```bash
    npm install -g @farm-framework/cli
    ```
  </CodeTab>
</CodeTabs>
````

Or if single tab, just use plain markdown:

````markdown
```bash
npm install -g @farm-framework/cli
```
````

````

---

### ❌ Mistake 3: Nested CodeBlock inside CodeTab

```markdown
<CodeTabs>
  <CodeTab value="bash" label="Installation">
    <CodeBlock>
      ```bash
      npm install -g @farm-framework/cli
      ```
    </CodeBlock>
  </CodeTab>
</CodeTabs>
````

**Problem:**

- Triple backticks already become CodeBlock via MDX processing
- Additional CodeBlock wrapper creates double nesting
- Results in rendering issues

**✅ Fix:**

````markdown
<CodeTabs>
  <CodeTab value="bash" label="Installation">
    ```bash
    npm install -g @farm-framework/cli
    ```
  </CodeTab>
</CodeTabs>
````

---

### ❌ Mistake 4: Missing required props on CodeTab

````markdown
<CodeTabs>
  <CodeTab label="Installation">
    ```bash
    npm install
    ```
  </CodeTab>
</CodeTabs>
````

**Problem:**

- Missing `value` prop (required for tab identification)
- CodeTabs uses `value` to track active tab

**✅ Fix:**

````markdown
<CodeTabs>
  <CodeTab value="install" label="Installation">
    ```bash
    npm install
    ```
  </CodeTab>
</CodeTabs>
````

---

### ❌ Mistake 5: String content instead of markdown code blocks

```markdown
<CodeTabs>
  <CodeTab value="bash" label="Installation">
    "bash npm install -g @farm-framework/cli"
  </CodeTab>
</CodeTabs>
```

**Problem:**

- Plain string won't trigger syntax highlighting
- No code block rendering, just text

**✅ Fix:**

````markdown
<CodeTabs>
  <CodeTab value="bash" label="Installation">
    ```bash
    npm install -g @farm-framework/cli
    ```
  </CodeTab>
</CodeTabs>
````

---

## Component Flow Diagram

````
MDX File
   │
   ├─ Plain Markdown Code Block (```language)
   │     │
   │     └─→ MDX Processor
   │           │
   │           └─→ Converts to <pre><code className="language-*">
   │                 │
   │                 └─→ MDXComponents intercepts <pre>
   │                       │
   │                       └─→ Routes to CodeBlock component
   │                             │
   │                             └─→ Renders with syntax highlighting
   │
   └─ CodeTabs Component
         │
         ├─→ Expects CodeTab children
         │     │
         │     └─→ Each CodeTab contains markdown code block
         │           │
         │           └─→ Markdown code block processed as above
         │                 │
         │                 └─→ Renders in tabbed interface
         │
         └─→ Manages tab state & rendering
````

---

## Key Takeaways

1. **Never wrap markdown code blocks in `<CodeBlock>` tags**

   - Triple backticks are automatically processed by MDX

2. **CodeTabs requires CodeTab children**

   - Each CodeTab needs `value` and `label` props
   - Content inside CodeTab should be markdown code blocks

3. **CodeTab is a wrapper component**

   - It doesn't render code itself
   - It provides structure for CodeTabs to create tabs

4. **Use plain markdown for single code blocks**

   - Only use CodeTabs when you need multiple tabs

5. **Language is specified in markdown, not as props**
   - Write: ` ```typescript ` not `<CodeBlock language="typescript">`

---

## Testing Checklist

When implementing code blocks:

- [ ] Is this a single code example? → Use plain markdown
- [ ] Multiple related examples? → Use CodeTabs + CodeTab
- [ ] Each CodeTab has unique `value` prop
- [ ] Each CodeTab has descriptive `label` prop
- [ ] Code inside CodeTab uses triple backticks with language
- [ ] No CodeBlock wrapper around markdown code
- [ ] Language specified after opening backticks (`bash, `typescript, etc.)
- [ ] Proper indentation maintained
- [ ] No mixing of patterns (don't use both examples prop and children)

---

## Reference: farm-framework.mdx Issue Analysis

**Current Broken Code (Lines 757-777):**

```markdown
<CodeBlock>
    <CodeTabs language="macos" label="macOS" code="...">
      <CodeBlock>
        bash npm install -g @farm-framework/cli
      </CodeBlock>
    </CodeTabs>
    <CodeTabs language="linux" label="Linux">
      "bash npm install -g @farm-framework/cli"
    </CodeTabs>
    <CodeTabs language="windows" label="Windows">
      "powershell npm install -g @farm-framework/cli"
    </CodeTabs>
</CodeBlock>
```

**Issues:**

1. ❌ Outer CodeBlock wrapping everything
2. ❌ CodeTabs used incorrectly (not containing CodeTab children)
3. ❌ `language`, `label`, `code` props don't exist on CodeTabs
4. ❌ Nested CodeBlock inside CodeTabs
5. ❌ String content instead of markdown code blocks
6. ❌ Multiple separate CodeTabs instead of tabs within one CodeTabs

**Correct Implementation:**

````markdown
<CodeTabs>
  <CodeTab value="macos" label="macOS">
    ```bash
    npm install -g @farm-framework/cli
    ```
  </CodeTab>
  <CodeTab value="linux" label="Linux">
    ```bash
    npm install -g @farm-framework/cli
    ```
  </CodeTab>
  <CodeTab value="windows" label="Windows">
    ```powershell
    npm install -g @farm-framework/cli
    ```
  </CodeTab>
</CodeTabs>
````

---

## Next Steps

1. Fix all CodeTabs usage in farm-framework.mdx
2. Verify no CodeBlock wrappers around markdown code
3. Ensure all CodeTab components have required props
4. Test rendering in browser
5. Document any additional edge cases discovered
