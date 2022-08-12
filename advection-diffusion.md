# The Fokker-Planck equation: transporting probabilities

:::{admonition} Abstract
These notes are meant to provide a physical intuition for the Fokker-Planck
equation by exploiting its similarity to the advection-diffusion equation.
:::

## Continuity Equation

Let's start with the continuity equation which essentially captures
the (seemingly trivial) statement “stuff does not simply vanish”
mathematically. 

Consider an arbitrary quantity with volume density $\rho=\rho(\bm{x},t)$,
e.g., a dye dissolved in water. The total amount of the quantity in
any given volume $V$ is $\int_{V}\rho\,dV$. Excluding sources, sinks,
and teleportation, the only possibility for the total amount to change
is a flux of the quantity out of the surface $S$ of the volume. The
*flux* $\bm{j}=\bm{j}(\bm{x},t)$ describes the change of the
quantity per (infinitesimal) unit of time and (infinitesimal) area,
thus we get the total change of the quantity by integrating the flux
over the surface area:

$$
\partial_{t}\int_{V}\rho\,dV=-\int_{S}\bm{j}\cdot d\bm{S}\,.
$$  (eq:continuity)

This is the continuity equation in integral form. Using the divergence
theorem, or Gauss's theorem, $\int_{S}\bm{j}\cdot d\bm{S}=\int_{V}(\nabla\cdot\bm{j})\,dV$
and the fact that the volume under consideration is arbitrary, we
arrive at the *continuity equation* in differential form:

$$
\partial_{t}\rho=-\nabla\cdot\bm{j}\,.
$$  (eq:continuity_equation)

Note that the only assumption entering the derivation is the absence
of sources, sinks, and teleportation. Thus, the continuity equation
holds for any locally conserved quantity: mass, energy, electrical
charge, momentum, ...

## Advection-Diffusion Equation

First, let us consider the situation where the quantity is transported
by an externally imposed flow field $\bm{u}=\bm{u}(\bm{x},t)$, e.g.,
a dye in a river. For a more complicated example, see [this video](https://www.youtube.com/watch?v=fuIBcCxW9Hs&t=137s)
of a dye in a vortex. The *advective flux* is determined by the
flow field:

$$
\bm{j}_{\mathrm{adv}}=\bm{u}\rho\,.
$$  (eq:advective_flux)

In combination with the continuity equation Eq. {eq}`eq:continuity_equation`,
we get the *advection equation*

$$
\partial_{t}\rho=-\nabla\cdot(\bm{u}\rho)\,.
$$  (eq:advection_equation)

If we knew the flow field of the vortex in the above video, plugging
it into Eq. {eq}`eq:advection_equation` in combination with an
appropriate initial distribution would yield the awesome dynamics
of the dye.

Next, let us take diffusion into account. According to *Fick's
law*, the diffusive flux is caused by a gradient in the density $\nabla\rho$,

$$
\bm{j}_{\mathrm{Fick}}=-D\nabla\rho \,.
$$  (eq:diffusive_flux)

Here, the *diffusivity* $D=D(\bm{x},t)$ is in the most general
form a symmetric, positive definite matrix. If the diffusivity is
a scalar the medium is isotropic; if the diffusivity does not depend
on the position the medium is homogeneous. Plugging the diffusive
flux into the continuity equation, we get the diffusion equation

$$
\partial_{t}\rho=\nabla\cdot(D\nabla\rho) \,.
$$  (eq:diffusion_equation)

See Fig. 5.12 on p. 140 in the [soil physics lecture notes by Kurt Roth](http://ts.iup.uni-heidelberg.de/fileadmin/user_upload/misc/teaching/sp-2.2.pdf)
for an example solution of the stationary diffusion equation $\nabla\cdot(D\nabla\rho)=0$
in an heterogeneous medium (shown in Fig. 5.11 on p. 138).

Finally, combining advective flux and diffusive flux, $\bm{j}=\bm{j}_{\mathrm{adv}}+\bm{j}_{\mathrm{Fick}}$,
and the continuity equation we arrive at the **advection-diffusion
equation**

$$
\partial_{t}\rho=-\nabla\cdot(\bm{u}\rho)+\nabla\cdot(D\nabla\rho) \,.
$$  (eq:advection_diffusion_equation)

It describes the transport of a quantity due to advection and diffusion.
For an interesting example of the interplay between advection and
diffusion, let us briefly consider *Taylor dispersion* based
on Fig. 4.2 on p. 106 in the soil physics lecture notes.

## Fokker-Planck Equation

The advection-diffusion equation Eq. {eq}`eq:advection_diffusion_equation`
resembles the *Fokker-Planck equation* [{cite:label}`riskenFokkerPlanckEquationMethods1996`, Eq. 1.16]

$$
\partial_{t}p=-\partial_{i}D_{i}^{(1)}p+\partial_{i}\partial_{j}D_{ij}^{(2)}p.
$$ (eq:Fokker_Planck_equation)

Here, $D_{i}^{(1)}$ is the *drift vector* and $D_{ij}^{(2)}$
the *diffusion matrix*. Note that we use the sum convention.

At first glance, the correspondence is $p=\rho$, $D_{i}^{(1)}=u_{i}$,
and $D_{ij}^{(2)}=D_{ij}$. This makes sense: the quantity under consideration
is the probability which is locally conserved, the drift acts as an
externally imposed flow field, and the diffusion matrix equals the
diffusivity. If the latter is independent of the position, this correspondence
is indeed exact. Thus, in this case, the Fokker-Planck equation is
the advection-diffusion equation for the probability density.

In the general case, the situation is a bit more complicated. To see
this, let us rewrite Eq. `eq:advection_diffusion_equation`
into a Fokker-Planck equation,

$$
\partial_{t}\rho=-\partial_{i}u_{i}\rho+\partial_{i}D_{ij}\partial_{j}\rho=-\partial_{i}[u_{i}+(\partial_{j}D_{ij})]\rho+\partial_{i}\partial_{j}D_{ij}\rho,
$$

where we used the product rule in the last step. We see that a *spurious
drift* term appears, i.e., the correct correspondence of the drift
term is $D_{i}^{(1)}=u_{i}+\partial_{j}D_{ij}$.

This is akin to the spurious drift depending on the interpretation
of an underlying SDE. For the SDE $\dot{x}_{i}=h_{i}+g_{ij}\xi_{j}$
where $\langle\xi_{i}(t)\rangle=0$ and $\langle\xi_{i}(t)\xi_{j}(t^{\prime})\rangle=2\delta_{ij}\delta(t-t^{\prime})$
we have {cite:p}`Stratonovich89_16`
\begin{equation}
D_{i}^{(1)}=h_{i}+2\lambda g_{kj}\partial_{k}g_{ij},\qquad D_{ij}^{(2)}=g_{ik}g_{jk},
\end{equation}
where $\lambda\in[0,1]$ determines the interpretation: $\lambda=0$
for Itô, $\lambda=1/2$ for Stratonovich, and $\lambda=1$ for Hänggi-Klimontovich
(or kinetic). For the special case $g_{ij}=g_{i}\delta_{ij}$ the
diffusion matrix is diagonal, $D_{ij}^{(2)}=g_{i}^{2}\delta_{ij}$,
and we can rewrite the drift as $D_{i}^{(1)}=h_{i}+\lambda\partial_{j}D_{ij}^{(2)}$.
Thus, if we choose the Hänggi-Klimontovich interpretation $\lambda=1$,
we get the direct correspondence $u_{i}=h_{i}$ and $D_{ij}=g_{i}^{2}\delta_{ij}$.
Put differently, the Hänggi-Klimontovich interpretation corresponds
to the advection-diffusion equation. However, for arbitrary $g_{ij}$
this correspondence does not hold (as far as I can see) because $2g_{kj}\partial_{k}g_{ij}\neq\partial_{j}g_{ik}g_{jk}$.
