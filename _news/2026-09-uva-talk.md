---
layout: post
date: 2026-09-18 00:00:00
inline: false
related_posts: false
---

M. gave a seminar at the [Department of Electrical and Computer Engineering](https://engineering.virginia.edu/department/electrical-and-computer-engineering) at the University of Virginia, titled "Optimization for Large Language Model Pre-training: New Algorithms, Theory, and Insights". The talk covered [SCALE](https://arxiv.org/abs/2506.16659), a minimalist optimizer built on SGD that matches Adam while using a fraction of its memory; an analysis of [why plain SGD struggles](https://arxiv.org/abs/2605.17787) in LLM pre-training, and how simple clipping mechanisms close most of the gap; and [EMA-Nesterov](https://arxiv.org/abs/2605.25395), a stabilized variant of Nesterov's lookahead that consistently improves Adam, SOAP and Muon on pre-training benchmarks. The seminar announcement can be found [here](https://engineering.virginia.edu/news-events/events/optimization-large-language-model-pre-training-new-algorithms-theory-and-insights-seminar).
