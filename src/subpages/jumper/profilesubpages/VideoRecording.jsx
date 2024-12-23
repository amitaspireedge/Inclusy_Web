import React from 'react'

export default function VideoRecording() {
  return (
    <div className="tab col-md-12 p-3 border mb-5 rounded rounded-2">
      <div class="tab-pane pt-3 pb-3" id="tabs-5" role="tabpanel">
  <h5 style={{color:"var(--text-main)"}}>Video recordings</h5>
  <div class="text-center mt-5 mb-5">
    <div class="p-3  m-auto rounded-circle" style={{width:"60px",background:"#00B38A"}}><i class='bx bxs-video-off' style={{color:"#fff",fontSize:"26px",lineHeight:"normal" }}></i></div>
    <h3 class="mt-3 mb-3">No recordings yet</h3>
    <p style={{color: "var(--text-main)"}}>Once you've recorded your first video, you'll find them here.</p>
  </div>

  <div class="col-md-4 m-auto pt-3 ">
    <button type="button" class="btn btn-primary w-100  back-till border-0">Add Video Recordings</button>
  </div>

</div>
    </div>
  )
}
