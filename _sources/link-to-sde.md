# Relating Fokker-Planck to stochastic differential equations

(Adapted from Risken §3.3.2)

Recall that the FPE are coefficients $D^{(n)}$ are directly related to the moments of $p(t+τ, x' \mid t, x)$:

$$\begin{aligned}
\frac{1}{n!} M_n(t,τ,n) &= \frac{1}{n!} \langle \bigl(X(t+τ) - X(t)\bigr) \\
\frac{1}{n!} \langle ΔX(t)\bigr) \\
&= D^{(n)}(t, x)τ + \mathcal{O}(τ^2) \,,
\end{aligned}$$

:::{margin}
Langevin equation
~ $dX(t) = f(t,X(t)) dt + g(t,X(t)) dW$
:::
To relate these coefficients to the [Langevin equation](#Introduction), {cite:ct}`riskenFokkerPlanckEquationMethods1996` writes

$$X(t+τ) - X(t) = \int_t^{t+τ} f(t', X(t')) dt' + g(t', X(t')) dW(t')$$

:::{caution}
Because $X$ is non-differentiable, even in the limit $τ \to 0$, a first order approximation of $g$ does not suffice.
:::

One can then expand $f$ and $g$ so they only depend on the know quantities $t$ and $x$:

$$\begin{aligned}
f(t+τ, X(t+τ)) &= f(t, X(t)) + \frac{\partial f}{\partial x}_{t,X(t)} ΔX + \dotsb\\
g(t+τ, X(t+τ)) &= g(t, X(t)) + \frac{\partial g}{\partial x}_{t,X(t)} ΔX + \dotsb
\end{aligned}$$

Doing this recursively, eventually we obtain all terms of order $Δt$, and can evaluate[^1] the integrals for the moments.

[^1]: How one evaluates the integrals still depends on the stochastic convention, and how to do this in general is not obvious.

::::{margin}
:::{caution}
Although this approach should be equivalent to Risken's, at present my result differs by a factor ½.
:::
::::
We will follow a similar approach here, but working with the differentials:

$$ΔX(t) \stackrel{def}{=} \int_t^{t+Δt} f(t,X(t)) dt + g(t,X(t)) dW$$

