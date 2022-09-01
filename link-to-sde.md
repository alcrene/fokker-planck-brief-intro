# Relating Fokker-Planck to stochastic differential equations

(Adapted from Risken §3.3.2)

Recall that the FPE coefficients $D^{(1)}$ and $D^{(2)}$ are directly related to the moments of $p(t+Δt, x' \mid t, x)$:

:::{margin}
:class: sticky

$D^{(n)} = \frac{1}{n! Δt} \langle ΔX(t)^n\rangle$
:::
$$\begin{aligned}
\frac{1}{n!} M_n(t,Δt,n) &= \frac{1}{n!} \langle \bigl(X(t+Δt) - X(t)\bigr)^n\rangle \\
&= \frac{1}{n!} \langle ΔX(t)^n\rangle \\
&= D^{(n)}(t, x)Δt + \mathcal{O}(Δt^2) \,.
\end{aligned}$$  (eq-kramers-coeff-to-moments)

We want to relate these to the drift and diffusion terms of the Langevin equation:

$$dX(t) = f(t,X(t)) dt + g(t,X(t)) dW \,.$$

[Recall](#Introduction) that depending the chosen convention, integrating this expression over a small interval $Δt$ produces different results:
```{list-table}
:header-rows: 0

* - Itô
  - $ΔX(t_i) = f(t_i,X(t_i))Δt + g(t_i,X(t_i))ΔW(t_i)\hphantom{+ g(t_{i+1},X(t_{i+1}))}$
* - Stratonovich
  - $\begin{aligned}
  ΔX(t_i) &= f(t_i,X(t_i))Δt + \frac{g(t_i,X(t_i)) + g(t_{i+1},X(t_{i+1}))}{2}ΔW(t_i) \\
  &= f(t_i,X(t_i))Δt + g(t_i,X(t_i))ΔW(t_i) + \frac{1}{2} \left.\frac{\partial g}{\partial x}\right\rvert_{t_i}ΔX(t_i) ΔW(t_i) \\
  &= f(t_i,X(t_i))Δt + g(t_i,X(t_i))ΔW(t_i) + \frac{1}{2} \left.\frac{\partial g}{\partial x}\right\rvert_{t_i}g(t_i,X(t_i)) ΔW(t_i)^2 + \mathcal{O}(Δt^{3/2})
  \end{aligned}$
* - Hänggi
  - $\begin{aligned}
  ΔX(t_i) &= f(t_i,X(t_i))Δt + g(t_{i+1},X(t_{i+1}))ΔW(t_i)\hphantom{+ g(t_{i},X)} \\
  &= f(t_i,X(t_i))Δt + g(t_i,X(t_i))ΔW(t_i) + \hphantom{\frac{1}{2}} \left.\frac{\partial g}{\partial x}\right\rvert_{t_i}g(t_i,X(t_i)) ΔW(t_i)^2 + \mathcal{O}(Δt^{3/2})
  \end{aligned}$
```

::::{margin}
:::{caution}
Risken uses the convention $\langle ΔW(t) ΔW(t')\rangle = 2\, δ(t)\, Δt\,.$
:::
::::
We also have the following [rules for stochastic calculus](https://slides.com/alexrene/a-mathematically-offensive-introduction-to-stochastic-calculus#/calculus-rules), which are valid in any convention:

$$\begin{aligned}
\langle ΔW(t) Δt \rangle = \langle Δt^2 \rangle &= 0 \\
\langle ΔW(t) \rangle &= 0 \\
\langle ΔW(t) ΔW(t') \rangle &= δ(t)\, Δt \\
\langle g(t, X(t)) ΔW(t) \rangle &= g(t, X(t)) \langle ΔW(t) \rangle \,.
\end{aligned}$$

Applying these rules we can evaluate the expectations in Eq. {eq}`eq-kramers-coeff-to-moments`.

**Itô convention**

$$\begin{aligned}
\langle ΔX(t_i) \rangle &= f(t_i) Δt + g(t_i, X(t_i)) \underbrace{\langle ΔW(t_i) \rangle}_{=0} \\
&= f(t_i) Δt \\
\langle ΔX(t_i)^2 \rangle &= g(t_i, X(t_i))^2 \underbrace{\langle ΔW(t_i)^2 \rangle}_{=Δt} + \mathcal{O}(ΔtΔW(t_i)) \\
&= g(t_i, X(t_i))^2 Δt
\end{aligned}$$

**Stratonovich convention**

$$\begin{aligned}
\langle ΔX(t_i) \rangle &= f(t_i) Δt + g(t_i, X(t_i)) \underbrace{\Bigl\langle ΔW(t_i) \Bigr\rangle}_{=0} + \frac{1}{2} \frac{\partial g(t_i, X(t_i))}{\partial x} g(t_i, X(t_i)) \underbrace{\Bigl\langle ΔW(t_i)^2 \Bigr\rangle}_{=Δt} \\
&= f(t_i) Δt + \frac{1}{2} \frac{\partial g(t_i, X(t_i))}{\partial x} g(t_i, X(t_i)) Δt \\
\langle ΔX(t_i)^2 \rangle &= g(t_i, X(t_i))^2 Δt
\end{aligned}$$

**Hänggi-Klimontovich convention**

$$\begin{aligned}
\langle ΔX(t_i) \rangle 
&= f(t_i) Δt + \hphantom{\frac{1}{2}} \frac{\partial g(t_i, X(t_i))}{\partial x} g(t_i, X(t_i)) Δt \\
\langle ΔX(t_i)^2 \rangle &= g(t_i, X(t_i))^2 Δt
\end{aligned}$$

Substituting these results back into Eq. {eq}`eq-kramers-coeff-to-moments`, we get the correspondences listed in {numref}`tab-fpe-sde-correspondence`.

::::{margin}
:::{caution}
If the convention $\langle dW(t) dW(t')\rangle = 2\, δ(t)\, dt$ is used, the spurious drift terms must be multiplied by 2.
:::
::::
```{list-table}  Correspondence between Fokker-Planck and Langevin coefficients.
:header-rows: 1
:name: tab-fpe-sde-correspondence

* - 
  - drift, $D^{(1)}$
  - diffusion, $D^{(2)}$
* - **Itô**
  - $f(t_i, X(t_i))$
  - $\frac{1}{2} \,g(t_i, X(t_i))^2$
* - **Stratonovich**
  - $f(t_i, X(t_i)) + \frac{1}{2} \frac{\partial g(t_i, X(t_i))}{\partial x} g(t_i, X(t_i))$
  - $\frac{1}{2} \,g(t_i, X(t_i))^2$
* - **Hänggi-Klimontovich**
  - $f(t_i, X(t_i)) + \hphantom{\frac{1}{2}} \frac{\partial g(t_i, X(t_i))}{\partial x} g(t_i, X(t_i))$
  - $\frac{1}{2} \,g(t_i, X(t_i))^2$
```

The additional drift appearing in the expressions under the Stratonovich and Hänggi-Klimontovich conventions is sometimes called the **spurious drift**, or the **noise-induced drift**. It only comes into play when $g$ depends directly on $X$.
