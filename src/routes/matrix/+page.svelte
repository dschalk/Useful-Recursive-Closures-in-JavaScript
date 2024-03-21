<!DOCTYPE html>

<body lang="en-US" dir="ltr"><p style="line-height: 100%; margin-bottom: 0in">
Rubik's Cube matrix multiplication (using no context from Notebook)</p>
<p style="line-height: 100%">To perform matrix multiplication for a
Rubik's Cube, we can represent the cube as a 3x3x3 matrix. Each face
of the Rubik's Cube can be represented as a 3x3 matrix, and the
entire Rubik's Cube can be represented as a 3x3x6 matrix, where each
3x3x1 slice represents a face of the cube. To perform matrix
multiplication for a Rubik's Cube, we can use the NumPy package in
Python. NumPy provides efficient functions for matrix operations,
including matrix multiplication. Here's an example of how you can
perform matrix multiplication for a Rubik's Cube using NumPy: 
</p>
<pre style="border: none; padding: 0in"><font color="#9a86fd"><font color="#ffcc99">import</font> numpy <font color="#ffcc99">as</font> np</font>

<font color="#6c6783"># Define the initial state of the Rubik's Cube as a 3x3x6 matrix</font>
<font color="#9a86fd">rubiks_cube <font color="#e09142">=</font> np<font color="#6c6783">.</font>array<font color="#6c6783">([</font></font>
<font color="#9a86fd">    <font color="#6c6783"># Front face</font></font>
<font color="#9a86fd">    <font color="#6c6783">[[</font><font color="#e09142">1</font><font color="#6c6783">,</font> <font color="#e09142">1</font><font color="#6c6783">,</font> <font color="#e09142">1</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">1</font><font color="#6c6783">,</font> <font color="#e09142">1</font><font color="#6c6783">,</font> <font color="#e09142">1</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">1</font><font color="#6c6783">,</font> <font color="#e09142">1</font><font color="#6c6783">,</font> <font color="#e09142">1</font><font color="#6c6783">]],</font></font>
<font color="#9a86fd">    </font>
<font color="#9a86fd">    <font color="#6c6783"># Back face</font></font>
<font color="#9a86fd">    <font color="#6c6783">[[</font><font color="#e09142">2</font><font color="#6c6783">,</font> <font color="#e09142">2</font><font color="#6c6783">,</font> <font color="#e09142">2</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">2</font><font color="#6c6783">,</font> <font color="#e09142">2</font><font color="#6c6783">,</font> <font color="#e09142">2</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">2</font><font color="#6c6783">,</font> <font color="#e09142">2</font><font color="#6c6783">,</font> <font color="#e09142">2</font><font color="#6c6783">]],</font></font>
<font color="#9a86fd">    </font>
<font color="#9a86fd">    <font color="#6c6783"># Top face</font></font>
<font color="#9a86fd">    <font color="#6c6783">[[</font><font color="#e09142">3</font><font color="#6c6783">,</font> <font color="#e09142">3</font><font color="#6c6783">,</font> <font color="#e09142">3</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">3</font><font color="#6c6783">,</font> <font color="#e09142">3</font><font color="#6c6783">,</font> <font color="#e09142">3</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">3</font><font color="#6c6783">,</font> <font color="#e09142">3</font><font color="#6c6783">,</font> <font color="#e09142">3</font><font color="#6c6783">]],</font></font>
<font color="#9a86fd">    </font>
<font color="#9a86fd">    <font color="#6c6783"># Bottom face</font></font>
<font color="#9a86fd">    <font color="#6c6783">[[</font><font color="#e09142">4</font><font color="#6c6783">,</font> <font color="#e09142">4</font><font color="#6c6783">,</font> <font color="#e09142">4</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">4</font><font color="#6c6783">,</font> <font color="#e09142">4</font><font color="#6c6783">,</font> <font color="#e09142">4</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">4</font><font color="#6c6783">,</font> <font color="#e09142">4</font><font color="#6c6783">,</font> <font color="#e09142">4</font><font color="#6c6783">]],</font></font>
<font color="#9a86fd">    </font>
<font color="#9a86fd">    <font color="#6c6783"># Left face</font></font>
<font color="#9a86fd">    <font color="#6c6783">[[</font><font color="#e09142">5</font><font color="#6c6783">,</font> <font color="#e09142">5</font><font color="#6c6783">,</font> <font color="#e09142">5</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">5</font><font color="#6c6783">,</font> <font color="#e09142">5</font><font color="#6c6783">,</font> <font color="#e09142">5</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">5</font><font color="#6c6783">,</font> <font color="#e09142">5</font><font color="#6c6783">,</font> <font color="#e09142">5</font><font color="#6c6783">]],</font></font>
<font color="#9a86fd">    </font>
<font color="#9a86fd">    <font color="#6c6783"># Right face</font></font>
<font color="#9a86fd">    <font color="#6c6783">[[</font><font color="#e09142">6</font><font color="#6c6783">,</font> <font color="#e09142">6</font><font color="#6c6783">,</font> <font color="#e09142">6</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">6</font><font color="#6c6783">,</font> <font color="#e09142">6</font><font color="#6c6783">,</font> <font color="#e09142">6</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">     <font color="#6c6783">[</font><font color="#e09142">6</font><font color="#6c6783">,</font> <font color="#e09142">6</font><font color="#6c6783">,</font> <font color="#e09142">6</font><font color="#6c6783">]]</font></font>
<font color="#9a86fd"><font color="#6c6783">])</font></font>

<font color="#6c6783"># Define a transformation matrix for a specific move (e.g., a clockwise rotation of the front face)</font>
<font color="#9a86fd">transformation_matrix <font color="#e09142">=</font> np<font color="#6c6783">.</font>array<font color="#6c6783">([</font></font>
<font color="#9a86fd">    <font color="#6c6783">[</font><font color="#e09142">0</font><font color="#6c6783">,</font> <font color="#e09142">1</font><font color="#6c6783">,</font> <font color="#e09142">0</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">    <font color="#6c6783">[</font><font color="#e09142">-1</font><font color="#6c6783">,</font> <font color="#e09142">0</font><font color="#6c6783">,</font> <font color="#e09142">0</font><font color="#6c6783">],</font></font>
<font color="#9a86fd">    <font color="#6c6783">[</font><font color="#e09142">0</font><font color="#6c6783">,</font> <font color="#e09142">0</font><font color="#6c6783">,</font> <font color="#e09142">1</font><font color="#6c6783">]</font></font>
<font color="#9a86fd"><font color="#6c6783">])</font></font>

<font color="#6c6783"># Perform matrix multiplication to apply the transformation to the Rubik's Cube</font>
<font color="#9a86fd">transformed_cube <font color="#e09142">=</font> np<font color="#6c6783">.</font>tensordot<font color="#6c6783">(</font>rubiks_cube<font color="#6c6783">,</font> transformation_matrix<font color="#6c6783">,</font> axes<font color="#e09142">=</font><font color="#6c6783">([</font><font color="#e09142">2</font><font color="#6c6783">],</font> <font color="#6c6783">[</font><font color="#e09142">0</font><font color="#6c6783">]))</font></font>

<font color="#9a86fd"><font color="#ffcc99">print</font><font color="#6c6783">(</font>transformed_cube<font color="#6c6783">)</font></font></pre><p style="margin-bottom: 0in">
In this example, we use NumPy to define the initial state of the
Rubik's Cube as a 3x3x6 matrix and a transformation matrix for a
specific move. We then use the `np.tensordot` function to perform
matrix multiplication and apply the transformation to the Rubik's
Cube. </p>
</body>