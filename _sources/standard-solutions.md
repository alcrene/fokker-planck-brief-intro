# Standard solutions of the Fokker-Planck equation

(Based on Risken §4.4)

## Continuity equation form

:::{admonition} Recall
Fokker-Planck in higher dimensions
~ $$
\frac{\partial p(t, x)}{\partial t} = \underbrace{- \sum_i \frac{\partial}{\partial x_i} \left[D_i^{(1)}(x) \, p(t,x)\right]}_{\text{drift}} + \underbrace{\sum_{i,j} \frac{\partial^2}{\partial x_i \partial x_j} \left[D_{ij}^{(2)}(x) \, p(t, x) \right]}_{\text{diffusion}}
$$
:::

We can rewrite the FPE as a continuity equation

:::{margin}
:class: sticky
$$J(x) = \left(D^{(1)}(x) + \sum_{j} \frac{\partial}{\partial x_j} D^{(2)}\right) p(t, x)$$
:::
$$\begin{aligned}
\frac{\partial p(t, x)}{\partial t} &= - \nabla \left[\left(D^{(1)}(x) + \sum_{j} \frac{\partial}{\partial x_j} D^{(2)}\right) p(t, x) \right] \\
&= - \nabla J(x)
\end{aligned}$$

where $J(x)$ is the **probability current**.

:::{note}
Since total probability is conserved, it makes sense to think of probability as flowing one cell $[x, x + dx)$ to its neighbours.
:::

## Stationary solutions

The [continuity equation form](#Continuity-equation-form) is especially useful for finding stationary solutions to the FPE. Example stationary solutions:

- Everything dies to a fixed point: $p(t, x) = δ(x-x_0)$
- Frozen position (e.g. [Galton board](https://en.wikipedia.org/wiki/Galton_board))
- Circulation

A stationary solution is defined by $\frac{\partial p(t, x)}{\partial t} = 0$. Then

$$\begin{aligned}
\frac{\partial p(t, x)}{\partial t} &= 0
= -\nabla J(x) \\
J(x) &= C
\end{aligned}$$

:::{margin}
Otherwise the normalization condition $\int p(t,x) dx = 1$ cannot be satisfied.
:::
If $x \in \mathbb{R}^n$, then the only non-trivial solution is $J(x) = 0$. Thus we reduce the problem to a much simpler ODE:

$$
D^{(1)}(x) p(t, x) + \nabla \left(D^{(2)} p(t, x)\right) = 0
$$ (eq-J-0-ODE)

## Going further

Entire books are devoted to developing techniques for solving more difficult cases of the FPE

- *The Fokker-Planck equation: methods of solution and applications* {cite:p}`riskenFokkerPlanckEquationMethods1996`
- *Noise-induced transitions: theory and applications in physics, chemistry, and biology* {cite:p}`horsthemkeNoiseinducedTransitionsTheory2006`