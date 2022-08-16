import lightkurve as lk
import numpy as np
from lightkurve import TessTargetPixelFile, search_targetpixelfile

# Download the pixelfile for a star
#tpf = TessTargetPixelFile("/")
#tpf.plot(frame=42) # OR ↓
pixelFile = search_targetpixelfile('KIC 6922244', author="Kepler", cadence="long", quarter=4).download()
pixelFile.plot(frame=42) # show a single snapshot from the pixelfile

# Combine the individual frames into a lightcurve
lc = pixelFile.to_lightcurve(aperture_mask=pixelFile.pipeline_mask)
lc.plot() # aperture mask -> improve the image quality
flat_lc = lc.flatten() # flatten the curve to make it easier to spot the pattern
flat_lc.plot()

# Phase-fold the light curve to verify `period` and `transmit time` correspond to the transit signal
folded_lc = flat_lc.fold(period=3.5225) # if period is correct, the frequency spikes are placed effectively on top of each other

# Use periodograms to show repetitive patterns in the graph to determine the period
period = np.linspace(1, 5, 10000)
bls = lc.to_periodogram(method='bls', period=period, frequency_factor=500) # box least squares
bls.plot()

# Period value corresponding to the highest peak in the periodogram
planet_x_period = bls.period_at_max_power
planet_x_t0 = bls.transit_time_at_max_power
planet_x_dur = bls.duration_at_max_power

# Folding method to yeild information about the planet
ax = lc.fold(period=planet_x_period, epoch_time=planet_x_t0).scatter()
ax.set_xlim(-2, 2)

print(planet_x_period)
print(planet_x_t0)
print(planet_x_dur)

# Create different pcg terrain models for planet types (e.g. scorched rocky) and example player interfaces/builds
# Draft up planetary system requirements & document the pcg methods that will draw from those tensforflow models based on lightkurve (flattened) models
# For now just 3d spheres based on the models from exynos and then merge into the current pcg models
# ICRAR models / ska (wa & south america) | keybase://chat/signalkinetics.hack#meta/5