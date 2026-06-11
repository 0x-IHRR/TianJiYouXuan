# 行动教育

## Mission
Create implementation-ready, token-driven UI guidance for 行动教育 that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: 行动教育
- URL: https://xdjy100.com/caselist?code=b33
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=SF Pro SC`, `font.family.stack=SF Pro SC, SF Pro Text, SF Pro Icons, AOS Icons, PingFang SC, Helvetica Neue, Helvetica, Arial, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=normal`
- Typography scale: `font.size.xs=14px`, `font.size.sm=14.4px`, `font.size.md=16px`, `font.size.lg=17.6px`, `font.size.xl=32px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#606266`, `color.text.tertiary=#ffffff`, `color.text.inverse=#666666`, `color.surface.muted=#f0f2f5`, `color.surface.raised=#f5f7fa`, `color.surface.strong=#104198`
- Spacing scale: `space.1=4px`, `space.2=5px`, `space.3=16px`, `space.4=20px`, `space.5=28px`, `space.6=50px`
- Radius/shadow/motion tokens: `radius.xs=2px`, `radius.sm=5px` | `shadow.1=rgb(240, 240, 240) 5px 5px 5px 0px` | `motion.duration.instant=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: cards (18), buttons (2), links (2), lists (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
