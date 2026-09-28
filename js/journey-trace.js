(() => {
  const timeline = document.querySelector('.journey-timeline');
  if (!timeline) return;
  const entries = [...timeline.querySelectorAll('.journey-entry')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.classList.add('journey-wave');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const make = (tag, className) => {
    const element = document.createElementNS(ns, tag);
    element.setAttribute('class', className);
    svg.append(element);
    return element;
  };
  const track = make('path', 'journey-wave-track');
  const trace = make('path', 'journey-wave-trace');
  const nodes = entries.map(() => make('circle', 'journey-wave-node'));
  const tip = make('circle', 'journey-wave-tip');
  tip.setAttribute('r', '4');
  const wrapper = document.createElement('div');
  wrapper.className = 'journey-traced';
  timeline.before(wrapper);
  wrapper.append(svg, timeline);
  let length = 0, frame = 0, stops = [];
  const draw = () => {
    frame = 0;
    if (!length) return;
    const y = innerHeight * .65 - wrapper.getBoundingClientRect().top;
    let low = 0, high = length;
    for (let i = 0; i < 14; i++) {
      const mid = (low + high) / 2;
      if (trace.getPointAtLength(mid).y < y) low = mid;
      else high = mid;
    }
    const reached = reducedMotion.matches ? length : (low + high) / 2;
    trace.style.strokeDashoffset = String(length - reached);
    const point = trace.getPointAtLength(reached);
    tip.setAttribute('cx', point.x);
    tip.setAttribute('cy', point.y);
    tip.style.opacity = y >= stops[0] || reducedMotion.matches ? '1' : '0';
    nodes.forEach((node, i) => {
      const active = reducedMotion.matches || y >= stops[i];
      node.classList.toggle('is-reached', active);
      entries[i].classList.toggle('is-reached', active);
    });
  };
  const measure = () => {
    stops = entries.map(entry => entry.offsetTop + 10);
    let d = `M 24 ${stops[0]}`;
    for (let i = 1; i < stops.length; i++) {
      const delta = stops[i] - stops[i - 1];
      const bend = i % 2 ? 49 : -1;
      d += ` C ${bend} ${stops[i - 1] + delta / 3}, ${bend} ${stops[i] - delta / 3}, 24 ${stops[i]}`;
    }
    svg.setAttribute('viewBox', `0 0 48 ${wrapper.offsetHeight}`);
    track.setAttribute('d', d);
    trace.setAttribute('d', d);
    length = trace.getTotalLength();
    trace.style.strokeDasharray = String(length);
    nodes.forEach((node, i) => { node.setAttribute('cx', '24'); node.setAttribute('cy', stops[i]); node.setAttribute('r', '5'); });
    draw();
  };
  addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(draw); }, {passive:true});
  reducedMotion.addEventListener('change', draw);
  new ResizeObserver(measure).observe(timeline);
  measure();
})();
