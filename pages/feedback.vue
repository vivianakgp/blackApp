<script setup lang="ts">
const title = useState("title", () => "")
const description = useState("description", () => "")


</script>

<template>
    <div class="feedback">
        <NuxtLink to="/">Back</NuxtLink>
        <!-- onSubmit={submit} -->
        <form class="form">
        <span class="iconPlus">+</span>
        <h2>Create New Feedback</h2>
        <div>
        <label htmlform="email">Feedback Title</label>
        <p>Add a short, descriptive headline</p>
        <input
            type="text"
            id="title"
            required
            autoCapitalize="on"
            value={{title}}
        />
        </div>
        <div>
        <label htmlform="pass">Feedback Detail</label>
        <p>
            Include any specific comments on what should be improved, added,
            etc.
        </p>
        <input
            type="text"
            id="description"
            required
            autoCapitalize="on"
            maxLength="250"
            value={{description}}
        />
        </div>
        <div class="containerBtn">
        <button type="submit" class="addFeedbackBtn">
            Add Feedback
        </button>
        <span class="cancelBtn">Cancel</span>
        </div>
    </form>
    </div>
    
</template>
   <!--
   <div className="divSelectBox">
          <h4>Category</h4>
          <p>Choose a category for your feedback</p>
          <div className="selectBox">
            <div>
              <p>{category}</p>
              <IconArrowDown
                onClick={() => setIsSelectBoxOpen(!isSelectBoxOpen)}
              />
            </div>
            <ul
              className={`categoryList ${isSelectBoxOpen ? "open" : "close"}`}
            >
              <li onClick={(e) => selectCategory(e)}>UI</li>
              <li onClick={(e) => selectCategory(e)}>UX</li>
              <li onClick={(e) => selectCategory(e)}>enhancement</li>
              <li onClick={(e) => selectCategory(e)}>bug</li>
              <li onClick={(e) => selectCategory(e)}>feature</li>
            </ul>
          </div>
        </div>
        -->