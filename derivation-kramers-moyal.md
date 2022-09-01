# Derivation of Fokker-Planck equation (Kramers-Moyal expansion)

(This page is heavily based on Sections 4.1, 4.3 and 4.7 in Risken.)

## Kramers-Moyal expansion (1D)

::::{margin}
:::{note}
- $p(t + τ, x | x', t)$: Green's function.
- $p(0, x)$: initial condition.
:::
::::
:::{margin}
:class: sticky
$$p(t + τ, x) = p(t, x) + \frac{\partial p(t, x)}{\partial t} τ + \mathcal{O}(τ^2)$$
:::

$$\begin{aligned}
p(t + τ, x) &= \int p(t + τ, x | x', t) p(t, x') dx' \\
&\approx p(t, x) + \frac{\partial p(t, x)}{\partial t} τ + \mathcal{O}(τ^2)
\,.
\end{aligned}$$  (eq-t-plus-tau)

:::{admonition} Goal
:class: important

Obtain expression for $p(t + τ, x | x', t)$ for small $τ$.
:::

**Assuming all moments** of $p(t + τ, x | x', t)$ **exist**, we can formally write them

$$M_n(t,τ,x') := \int (x-x')^n p(τ+τ, x | t, x') dx \,.$$

We now construct the characteristic function

$$\begin{aligned}
\varphi(t,τ, u,x') &= \int_{-\infty}^{\infty} e^{iu(x-x')} p(t+τ,x \mid t, x') dx \\
&= 1 + \sum_{n=1}^{\infty} \frac{(iu)^n}{n!} M_n(t,τ, x') \,;
\end{aligned}$$

and apply the inverse transform to get back the probability

$$\begin{aligned}
p(t+τ,x | t, x') &= \frac{1}{2π} \int_{-\infty}^\infty e^{-iu(x-x')} \varphi(t,τ,u,x') du \\
&= \frac{1}{2π} \int_{-\infty}^\infty e^{-iu(x-x')} \left[1 + \sum_{n=1}^{\infty} \frac{(iu)^n}{n!} M_n(t,τ, x') \right] du \,.
\end{aligned}$$ (eq-p-fourier-inverse-fourier)

With the following two identities,
:::{admonition} Identities

$$\begin{aligned}
\frac{1}{2π} \int_{-\infty}^\infty (iu)^n e^{-iu(x-x')} du &= \left( -\frac{\partial}{\partial x} \right)^n δ(x - x') \\[1.5ex]
δ(x-x')f(x') &= δ(x-x')f(x)
\end{aligned}
\qquad\text{(for $n \geq 0$)}
$$

:::
we can rewrite {eq}`eq-p-fourier-inverse-fourier` as

$$
p(t+τ,x | t, x') = \left[1 + \sum_{n=1}^{\infty} \left(\frac{\partial}{\partial x}\right)^n M_n(t,τ, x') \right] δ(x-x') \,.
$$  (eq-p-greens-moments)

Substituting back into {eq}`eq-t-plus-tau`,

$$\begin{aligned}
p(t + τ, x) - p(t, x) &= \frac{\partial p(t, x)}{\partial t} τ + \mathcal{O}(τ^2) \\
\int p(t + τ, x | x', t) p(t, x') dx' - p(t, x) &= p(t, x) - p(t, x) + \sum_{n=1}^{\infty} \left(\frac{\partial}{\partial x}\right)^n M_n(t,τ, x) p(t, x) \,.
\end{aligned}$$

We now **assume that each moment can itself be expanded to first order**:

:::{margin}
$$\frac{1}{n!} M_n(t,τ,n) = D^{(n)}(t, x)τ + \mathcal{O}(τ^2) \,,$$
:::
$$\frac{1}{n!} M_n(t,τ,n) = D^{(n)}(t, x)τ + \mathcal{O}(τ^2) \,,$$

:::{note}
The zero order term must vanish, since we have $p(t,x|t,x') = δ(x-x')$ and therefore all moments vanish at $t=t'$.
:::

which leads to the **Kramers-Moyal expansion**:

%:::{margin}
%Kramers-Moyal expansion
%~ $\frac{\partial p(t,x)}{\partial t} = \sum_{n=1}^\infty \left(-\frac{\partial}{\partial x}\right)^n D^{(n)}(t,x) p(t,x)$
%:::
$$\frac{\partial p(t,x)}{\partial t} = \sum_{n=1}^\infty \left(-\frac{\partial}{\partial x}\right)^n D^{(n)}(t,x) p(t,x)\,.$$  (eq-Kramers-Moyal)

## Pawula theorem

The Kramers-Moyal expansion (Eq. {eq}`eq-Kramers-Moyal`) either
- stops on the first term;
- stops on the second term;
- contains an infinite number of terms.

If it stops after the second term it is called a **Fokker-Planck equation**.

A [*drift-diffusion* process](#Introduction) with Gaussian noise has an associated Fokker-Planck equation.

A *jump* process does **not** have an associated Fokker-Planck equation.

## Fokker-Planck in higher dimensions

$$
\frac{\partial p(t, x)}{\partial t} = \underbrace{- \sum_i \frac{\partial}{\partial x_i} \left[D_i^{(1)}(x) \, p(t,x)\right]}_{\text{drift}} + \underbrace{\sum_{i,j} \frac{\partial^2}{\partial x_i \partial x_j} \left[D_{ij}^{(2)}(x) \, p(t, x) \right]}_{\text{diffusion}}
$$ (eq-fpe-higher-dim)
