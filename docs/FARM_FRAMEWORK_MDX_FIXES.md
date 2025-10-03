# FARM Framework MDX Code Block Fixes

## Summary

Converted all markdown code blocks in `farm-framework.mdx` to proper `<CodeBlock>` component usage for consistent rendering and styling. Also added `docsUrl` support for projects where documentation sites are more important than demo sites.

## Changes Made

### 1. Added `docsUrl` Support

- **File:** `lib/content.ts`
- **Change:** Added `docsUrl?: string;` to `ProjectMetadata` type
- **Purpose:** Support documentation URLs as primary links for framework/library projects

### 2. Updated Project Page Template

- **File:** `app/[locale]/projects/[slug]/page.tsx`
- **Change:** Added conditional rendering for Documentation button with book icon
- **Display Order:** Live Site → Documentation → Demo → NPM → PyPI → Source Code

### 3. Updated Farm Framework Frontmatter

- **File:** `content/projects/farm-framework.mdx`
- **Change:** Changed `demoUrl` to `docsUrl: "https://farm-framework.dev"`
- **Reason:** For framework projects, documentation is more important than a demo

### 4. Converted Code Blocks to CodeBlock Components

#### Architecture Diagram (line ~116)

````mdx
# Before

```bash
farm-framework/
├── @farm-framework/cli
...
```
````

# After

<CodeBlock language="bash">
{`farm-framework/
├── @farm-framework/cli
...`}
</CodeBlock>
```

#### Installation Commands (line ~213)

- Converted npm/pnpm/yarn installation commands
- Used single CodeBlock with proper formatting

#### Create Project Commands (line ~226)

- Converted farm create, cd, and farm dev commands
- Maintained comment structure

#### Core CLI Commands (line ~313)

- Converted all CLI commands with their flags
- Preserved inline comments

#### TypeScript Configuration (lines ~381, ~401)

- Converted two TypeScript config examples:
  - Local Ollama configuration
  - OpenAI production configuration
- Used template literals for multi-line code

#### Python Database Code (line ~505)

- Converted FastAPI route example
- Maintained proper indentation

#### Dockerfile (line ~565)

- Converted multi-stage Docker build
- Preserved all build stages

#### Getting Started Commands (lines ~758, ~764, ~794)

- Converted npm install command
- Converted farm create with template
- Converted ollama pull command

### 5. Updated Documentation

- **File:** `docs/PROJECT_FRONTMATTER.md`
- **Changes:**
  - Added `docsUrl` field documentation
  - Updated button display priority order
  - Added `docsUrl` to complete example
  - Documented book icon for Documentation button

## Benefits

1. **Consistent Rendering**: All code blocks now render with the same styling and copy button
2. **Proper Syntax Highlighting**: Language-specific highlighting for bash, TypeScript, Python, and Dockerfile
3. **Better User Experience**: Copy functionality on all code blocks
4. **Maintainability**: Easier to update code examples in the future
5. **Type Safety**: No more TypeScript errors from improper code block usage
6. **Documentation URLs**: Support for framework/library projects that prioritize docs over demos

## Code Block Conversion Pattern

All conversions followed this pattern:

````mdx
# Before (Markdown)

```language
code here
```
````

# After (Component)

<CodeBlock language="language">
{`code here`}
</CodeBlock>
```

## Verification

- ✅ No TypeScript errors in farm-framework.mdx
- ✅ All code blocks converted to CodeBlock components
- ✅ CodeTabs properly using examples prop pattern
- ✅ Type definitions updated with docsUrl
- ✅ Project page template rendering all URL types
- ✅ Documentation updated with docsUrl field

## Testing Checklist

- [ ] Verify farm-framework page loads without errors
- [ ] Check all code blocks render with syntax highlighting
- [ ] Verify copy buttons work on all code blocks
- [ ] Test Documentation button displays and links correctly
- [ ] Confirm button display order matches documentation
- [ ] Verify CodeTabs still work for type synchronization example
- [ ] Check Ollama installation tabs render properly

## Related Files

- `content/projects/farm-framework.mdx` - Main project file with all fixes
- `lib/content.ts` - Type definitions
- `app/[locale]/projects/[slug]/page.tsx` - Project page template
- `docs/PROJECT_FRONTMATTER.md` - Updated documentation
- `docs/CODE_COMPONENTS_DOCUMENTATION.md` - Component usage reference

## Notes

- The `docsUrl` field uses the same primary button styling as `siteUrl` and `demoUrl`
- Documentation button includes a book icon (SVG) for visual distinction
- All code blocks maintain their original language hints (bash, typescript, python, dockerfile)
- Template literals (` {``} `) are used for multi-line code to preserve formatting
- The Ollama installation CodeTabs remain unchanged as they already used the correct pattern
